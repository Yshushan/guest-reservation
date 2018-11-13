<template>
  <div id="guest-register">
    <mt-header title="访客预约登记">
      <mt-button icon="back" slot="left" @click.native="goback">返回</mt-button>
    </mt-header>
    <div class="register-form">
      <y-input label="被访员工" placeholder="添加被访人" icon="fa fa-angle-right" :required="true" :value="employee.userName" :readonly="true" @click.native="$router.push({name:'searchEmployee'})"/>
      <y-input label="来访人员" placeholder="添加来访人员" icon="fa fa-angle-right" :required="true" :value="guestsName" :readonly="true" @click.native="$router.push({name: 'addGuest'})"/>
      <y-input label="到访区域" placeholder="选择到访区域" icon="fa fa-angle-right" :required="true" :value="fullArea" :readonly="true" @click.native="$router.push({name: 'addArea'})"/>
      <y-input label="到访时间" placeholder="请选择到访时间" icon="fa fa-angle-right" :required="true" :value="visitDate | formatTime" :readonly="true"  @click.native="$refs.picker.open()"/>
      <y-input label="到访类型" placeholder="请选择" icon="fa fa-angle-right" :required="true" :value="visitType | dictTransform('visit')" :readonly="true" @click.native="selectType"/>
      <y-input label="携带物品" placeholder="添加携带物品" icon="fa fa-angle-right" :value="materials" :readonly="true" @click.native="$router.push({name: 'addMaterial'})"/>
      <y-input label="到访车辆" placeholder="添加到访车辆" icon="fa fa-angle-right" :value="cars" :readonly="true" @click.native="$router.push({name: 'addCar'})"/>
    </div>
    <mt-button class="sumbit-btn" type="primary" size="large" @click.native="submit">提交</mt-button>
    <mt-datetime-picker
        v-model="pickerValue"
        ref="picker"
        type="date"
        @confirm="handleConfirm">
      </mt-datetime-picker>

    <mt-popup v-model="popupVisible" position="bottom" class="popup">
      <mt-picker :slots="slots"
                  value-key="label"
                  @change="onValuesChange"
                  :showToolbar="true"
                  class="picker">
				  <span @click="popupVisible = false">取消</span>
				  <span @click="visitType = temp; popupVisible=false">确定</span>
			</mt-picker>
    </mt-popup>
  </div>
</template>

<script>
import { visitTypeSlots, visitTypeDict } from '@/testData.js'
import { Toast } from 'mint-ui'
export default {
  name: 'guest-register',
  data () {
    return {
      pickerValue: null,
      popupVisible: false,
      slots: [],
      temp: ''
    }
  },
  methods: {
    goback () {
      this.$router.push({ name: 'reservation' })
    },
    handleConfirm (value) {
      this.visitDate = value
    },
    selectType () {
      this.popupVisible = true
      this.slots = visitTypeSlots
    },
    onValuesChange (picker, values) {
      this.temp = values[0] ? values[0].value : ''
    },
    submit () {
      const registerData = {}
      registerData.userId = this.employee.userId
      registerData.guestBelongs = this.$store.state.materials.map(m => Object.values(m).join('&')).join('$')
      registerData.visitCarNumber = this.cars,
      registerData.visitArea = this.fullArea.split('-')[1]
      registerData.visitType = this.visitType
      registerData.visitDate = this.visitDate
      const guests = this.$store.state.guests
      if(Object.keys(registerData).some(key => {
        return !registerData[key] && !['guestBelongs', 'visitCarNumber'].includes(key)
        }) || !guests.length) {
          Toast('请填写必要的信息！')
      } else{

      }
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
    fullArea () {
      if (this.$store.state.subArea) { return `${this.$store.state.mainArea.nodeName}-${this.$store.state.subArea.organizationName}` } else return ''
    },
    cars () {
      return this.$store.state.cars.join(',')
    }
  },
  filters: {
    dictTransform (value, type) {
      if (!value) return
      if (type === 'visit') {
        return visitTypeDict.find(item => item.value === value).name
      }
    }
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
