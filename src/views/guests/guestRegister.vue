<template>
  <div id="guest-register">
    <mt-header title="访客预约登记">
      <mt-button icon="back" slot="left" @click.native="goback">返回</mt-button>
    </mt-header>
    <div class="register-form">
      <mt-field label="被访员工" placeholder="添加被访人" :value="employees" :readonly="true" @click.native="$router.push({name:'searchEmployee'})">
        <i class="fa fa-angle-right"></i>
      </mt-field>
      <mt-field label="来访人员" placeholder="添加来访人员" :value="guests" :readonly="true" @click.native="$router.push({name: 'addGuest'})">
        <i class="fa fa-angle-right"></i>
      </mt-field>
      <mt-field label="携带物品" placeholder="添加携带物品" :value="materials" :readonly="true" @click.native="$router.push({name: 'addMaterial'})">
        <i class="fa fa-angle-right"></i>
      </mt-field>
      <mt-field label="到访区域" placeholder="选择到访区域" :value="fullArea" :readonly="true" @click.native="$router.push({name: 'addArea'})">
        <i class="fa fa-angle-right"></i>
      </mt-field>
      <mt-field label="到访时间" placeholder="请选择到访时间" :value="visitTime | formatTime" :readonly="true"  @click.native="$refs.picker.open()">
        <i class="fa fa-angle-right"></i>
      </mt-field>
      <mt-field label="到访类型" placeholder="请选择" :value="visitType | dictTransform('visit')" :readonly="true" @click.native="selectType">
        <i class="fa fa-angle-right"></i>
      </mt-field>
    </div>
    <mt-button class="sumbit-btn" type="primary" size="large" @click.native="sumbit">提交</mt-button>
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
export default {
  name: 'guest-register',
  data () {
    return {
      pickerValue: null,
      popupVisible: false,
      visitTime: '',
      visitType: '',
      slots: [],
      temp: ''
    }
  },
  methods: {
    goback () {
      this.$router.push({ name: 'reservation' })
    },
    handleConfirm (value) {
      this.visitTime = value
    },
    selectType () {
      this.popupVisible = true
      this.slots = visitTypeSlots
    },
    onValuesChange (picker, values) {
      this.temp = values[0] ? values[0].value : ''
    },
    sumbit () {

    }
  },
  computed: {
    employees () {
        return this.$store.state.employeesInfo.map(employee => employee.name).join(',')
    },
    guests () {
        return this.$store.state.guestsInfo.map(guest => guest.name).join(',')
    },
    materials () {
        return this.$store.state.materialsInfo.map(material => material.name).join(',')
    },
    fullArea () {
      if(this.$store.state.subArea)
        return `${this.$store.state.mainArea.value}-${this.$store.state.subArea.value}`
      else return ''
    }
  },
  filters: {
    dictTransform(value, type){
      if(!value) return
      if(type === "visit"){
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
