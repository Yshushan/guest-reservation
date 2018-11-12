<template>
  <div id='add-guest'>
    <layout title="添加到访人" back="guestRegister">
      <mt-button slot="header-right" @click.native="confirm">确定</mt-button>
      <div class="guest-form">
        <mt-field label="来访单位" placeholder="请输入来访单位全名" v-model="guest.guestAddress"></mt-field>
        <mt-field label="访客姓名" placeholder="请输入姓名" v-model="guest.guestName"></mt-field>
        <mt-field label="性别" placeholder="请选择" :value="guest.guestGender | dictTransform('gender')" @click.native="selectGender" :readonly="true"></mt-field>
        <mt-field label="手机号" placeholder="请输入手机号" v-model="guest.guestTelphone"></mt-field>
        <mt-field label="电子邮箱" placeholder="请输入邮箱地址" v-model="guest.guestEmail"></mt-field>
        <mt-field label="证件类型" placeholder="请选择" :value="guest.certificateType | dictTransform('certificate')" @click.native="selectCertificate" :readonly="true"></mt-field>
        <mt-field label="证件号" placeholder="请输入证件号" v-model="guest.certificateNumber"></mt-field>
    </div>
    <added-list :lists="guests" @delete="deleteGuest">
      <span>已添加人员名单</span>
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
      popupVisible: false,
      slots: [],
      temp: ''
    }
  },
  methods: {
    confirm () {
      if (Object.values(this.guest).every(value => value)) {
        this.$store.commit('addGuest', { ...this.guest })
        this.$router.push({ name: 'guestRegister' })
      } else {
        Toast('请填写完整信息！')
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
    }
  },
  computed: {
    guests () {
      return this.$store.state.guests
    }
  },
  filters: {
    dictTransform (value, type) {
      if (!value) return ''
      if (type === 'gender') {
        return genderDict.find(item => item.value === value).name
      } else if (type === 'certificate') {
        return certificateTypeDict.find(item => item.value === value).name
      }
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
