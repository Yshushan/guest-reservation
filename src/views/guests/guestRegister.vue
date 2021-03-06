<template>
  <div id="guest-register">
    <mt-header title="访客预约登记">
      <mt-button icon="back" slot="left" @click.native="$router.push({ name: 'reservation' })">返回</mt-button>
    </mt-header>
    <div class="register-form">
      <y-input label="被访员工" placeholder="添加被访人" icon="fa fa-angle-right" :required="true"
               :value="employee && employee.userName" readonly @click.native="$router.push({name:'searchEmployee'})"/>
      <y-input label="来访人员" placeholder="添加来访人员" icon="fa fa-angle-right" :required="true" :value="guestsName" readonly
               @click.native="$router.push({name: 'addGuest'})"/>
      <y-input label="到访区域" placeholder="选择到访区域" icon="fa fa-angle-right" :required="true" :value="visitArea" readonly
               @click.native="$router.push({name: 'addArea'})"/>
      <y-input label="到访时间" placeholder="请选择到访时间" icon="fa fa-angle-right" :required="true"
               :value="visitDate | formatTime" readonly @click.native="$refs.datepicker.open()"/>
      <y-input label="到访类型" placeholder="请选择" icon="fa fa-angle-right" :required="true"
               :value="visitType | dictTransform('visitType')" readonly @click.native="popupVisible = true"/>
      <y-input label="携带物品" placeholder="添加携带物品" icon="fa fa-angle-right" :value="materials" readonly
               @click.native="$router.push({name: 'addMaterial'})"/>
      <y-input label="到访车辆" placeholder="添加到访车辆" icon="fa fa-angle-right" :value="cars" readonly
               @click.native="$router.push({name: 'addCar'})"/>
    </div>
    <mt-button class="sumbit-btn" type="primary" size="large" @click.native="submit">提交</mt-button>
    <mt-datetime-picker
        ref="datepicker"
        type="date"
        @confirm="handleConfirm">
    </mt-datetime-picker>
    <mt-popup v-model="popupVisible" position="bottom" class="popup">
      <mt-picker :slots="visitTypeSlots"
                  value-key="label"
                  :showToolbar="true"
                  class="picker"
                  ref="mtpicker">
				  <span @click="popupVisible = false">取消</span>
				  <span @click="saveSeleted">确定</span>
			</mt-picker>
    </mt-popup>
  </div>
</template>

<script>
import { visitTypeSlots } from '@/testData.js'
import { Toast, MessageBox } from 'mint-ui'
export default {
  name: 'guest-register',
  data () {
    return {
      popupVisible: false,
      visitTypeSlots,
    }
  },
  methods: {
    handleConfirm (value) {
      this.visitDate = value
    },
    saveSeleted () {
      const seleted = this.$refs.mtpicker.getSlotValue(0)
      if(seleted) {
        this.visitType = seleted.value
      }
      this.popupVisible = false
    },
    submit () {
      const registerData = this.registerData()
      if(Object.keys(registerData.mainData).some(key => {
        return !registerData.mainData[key] && !['guestBelongs', 'visitCarNumber'].includes(key)
        }) || !registerData.guests.length) {
          Toast('请填写必要的信息！')
      } else{
        // 提交表单
        Toast({
          message: '提交成功',
          iconClass: 'fa fa-check'
        })
        this.clearAll()
        this.$router.push({ name: 'reservation' })
      }
    },
    registerData(){
      const mainData = {
        userId: this.employee && this.employee.userId,
        visitArea: this.visitArea,
        visitType: this.visitType,
        visitDate: this.visitDate,
        visitCarNumber: this.cars,
        guestBelongs: this.$store.state.materials.map(m => Object.values(m).join('&')).join('$'),
      }
      return {
        mainData, 
        guests: this.$store.state.guests
      }
    },
    clearAll(){
      this.$store.commit('clearAll')
    }
  },
  computed: {
    visitDate: {
      get(){
        return this.$store.state.visitDate
      },
      set(value){
        this.$store.commit('updateVisitDate', value)
      }
    },
    visitType: {
      get(){
        return this.$store.state.visitType
      },
      set(value){
        this.$store.commit('updateVisitType', value)
      }
    },
    employee () {
      return this.$store.state.employee
    },
    guestsName () {
      return this.$store.state.guests.map(guest => guest.guestName).join(',')
    },
    materials () {
      return this.$store.state.materials.map(material => material.name).join(',')
    },
    visitArea () {
      return this.$store.state.visitArea && this.$store.state.visitArea.organizationName
    },
    cars () {
      return this.$store.state.cars.join(',')
    }
  },
  beforeRouteLeave(to, from, next){
    if(to.name === 'reservation'){
      const registerData = this.registerData()
      if(Object.values(registerData.mainData).some(value => value) || registerData.guests.length){
        MessageBox.confirm('当前页面信息还没保存，确定要离开？', '提示').then(action => {
          this.clearAll()
          next()
        }).catch(()=>{next(false)})
      }else next()
    }else next()
  }
}
</script>

<style lang="scss" scoped>
#guest-register{
  .popup{
    width: 100%;
    .picker{
      width: 100%;
      span{
				display: inline-flex;
				height: 100%;
				justify-content: center;
				align-items: center;
				padding: 0 15px;
				color: rgb(152, 152, 252);
				&:nth-child(2){
					float: right
				}
			}
    }
  }
  .sumbit-btn{
    position: fixed;
    bottom: 30px;
    width: 94%;
    margin-left: 3%;
  }
}
</style>
