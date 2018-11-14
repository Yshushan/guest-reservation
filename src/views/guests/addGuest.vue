<template>
  <div id='add-guest'>
    <layout title="添加到访人" back="guestRegister">
      <mt-button slot="header-right" @click.native="confirm">确定</mt-button>
      <div class="guest-form">
        <y-input label="来访单位" :required="true"  placeholder="请输入来访单位全名" v-model.trim="guest.guestAddress"/>
        <y-input label="访客姓名" :required="true"  placeholder="请输入姓名" v-model.trim="guest.guestName"/>
        <y-input label="性别" :required="true" placeholder="请选择" :value="guest.guestGender | dictTransform('gender')" @click.native="selectGender" readonly/>
        <y-input label="手机号" :required="true" :warning="warnings.phone" placeholder="请输入手机号" v-model.trim="guest.guestTelphone" @blur="checkPhone"/>
        <y-input label="电子邮箱" :required="true" :warning="warnings.email" placeholder="请输入邮箱地址" v-model.trim="guest.guestEmail" @blur="checkEmail"/>
        <y-input label="证件类型" :required="true"  placeholder="请选择" :value="guest.certificateType | dictTransform('certificate')"
                                @click.native="selectCertificate" readonly/>
        <y-input label="证件号" :required="true" :warning="warnings.certificate" placeholder="请输入证件号" 
                                v-model.trim="guest.certificateNumber" @blur="checkCertificate" :readonly="!guest.certificateType" />
    </div>
    <added-list :lists="guests" icon="fa fa-minus" @action="deleteGuest">
      <span v-show="guests.length">已添加人员名单</span>
    </added-list>
  </layout>
		<mt-popup v-model="popupVisible" position="bottom" class="popup">
      <mt-picker :slots="slots" value-key="label" @change="onValuesChange" :showToolbar="true" class="picker">
				<span @click="popupVisible = false">取消</span>
				<span @click="saveSeleted">确定</span>
			</mt-picker>
    </mt-popup>
  </div>
</template>

<script>
import { Toast, MessageBox } from 'mint-ui'
import { genderSlots, certificateTypeSlots, genderDict, certificateTypeDict } from '@/testData.js'
export default {
  name: 'add-guest',
  data () {
    return {
      guest: {
        guestAddress: '',
        guestName: '',
        guestTelphone: '',
        guestEmail: '',
        guestGender: '',
        certificateType: '',
        certificateNumber: ''
      },
      warnings:{
        phone: false,
        email: false,
        certificate: false,
      },
      popupVisible: false,
      slots: [],
      temp: ''
    }
  },
  watch: {
    'guest.certificateType': function (n, o) {
      this.guest.certificateNumber = ''
      this.warnings.certificate = false
    }
  },
  methods: {
    confirm () {
      if (Object.values(this.guest).some(value => !value)) 
        Toast('请填写完整信息！')
      else if(Object.values(this.warnings).some(value => value)) 
        Toast('请填写正确的信息！') 
      else {
        this.$store.commit('addGuest', { ...this.guest })
        this.$router.push({ name: 'guestRegister' })
      }
    },
    deleteGuest (guest) {
      MessageBox.confirm(`确定要删除“${guest.guestName}”?`, '提示')
        .then(action => {
          if (action) {
            this.$store.commit('deleteGuest', guest.guestTelphone)
          }
        })
        .catch(() => {})
    },
    onValuesChange (picker, values) {
      this.temp = values[0] ? values[0].value : ''
    },
    selectGender () {
      this.slots = genderSlots
      this.popupVisible = true
    },
    selectCertificate () {
      this.slots = certificateTypeSlots
      this.popupVisible = true
    },
    saveSeleted () {
      if (['male', 'female'].includes(this.temp)) {
        this.guest.guestGender = this.temp
      } else {
        this.guest.certificateType = this.temp
      }
      this.popupVisible = false
    },
    checkPhone(){
      if(this.guest.guestTelphone)
        this.warnings.phone = !/^1[34578]\d{9}$/.test(this.guest.guestTelphone)
      else 
        this.warnings.phone = false
    },
    checkEmail(){
      if(this.guest.guestEmail){
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        this.warnings.email = !re.test(this.guest.guestEmail)
      } else {
        this.warnings.email = false
      }
    },
    checkCertificate(){
      if(this.guest.certificateNumber){
        if(this.guest.certificateType === 'IDcard') {
          const re = /^\d{6}(19|20)\d{2}((0[13578]|10|12)(0[1-9]|[12]\d|30|31)|(0[469]|11)(0[1-9]|[12]\d|30)|02(0[1-9]|[12]\d))\d{3}[0-9Xx]$/
          this.warnings.certificate = !re.test(this.guest.certificateNumber)
        }else if(this.guest.certificateType === 'passport'){
          const re1 = /^[a-zA-Z]{5,17}$/
          const re2 = /^[a-zA-Z0-9]{5,17}$/
          this.warnings.certificate = !re1.test(this.guest.certificateNumber) || !re2.test(this.guest.certificateNumber)
        }else{
          //
        }
      } else{
        this.warnings.certificate = false
      }
    }
  },
  computed: {
    guests () {
      return this.$store.state.guests
    }
  }
}
</script>

<style lang="scss" scoped>
#add-guest {
  .popup {
    width: 100%;
    .picker {
      width: 100%;
      span {
        display: inline-flex;
        height: 100%;
        justify-content: center;
        align-items: center;
        padding: 0 15px;
        color: rgb(152, 152, 252);
        &:nth-child(2) {
          float: right;
        }
      }
    }
  }
}
</style>
