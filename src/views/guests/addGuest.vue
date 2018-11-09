<template>
  <div id='add-guest'>
    <layout v-bind="headParams">
      <mt-button slot="header-right" @click.native="confirm">确定</mt-button>
      <div class="guest-form">
        <mt-field label="来访单位" placeholder="请输入来访单位全名" v-model="guest.address"></mt-field>
        <mt-field label="访客姓名" placeholder="请输入姓名" v-model="guest.name"></mt-field>
        <mt-field label="性别" placeholder="请选择" :value="guest.gender" @click.native="selectGender" :readonly="true"></mt-field>
        <mt-field label="手机号" placeholder="请输入手机号" v-model="guest.phone"></mt-field>
        <mt-field label="证件类型" placeholder="请选择" :value="guest.certificateType" @click.native="selectCertificate" :readonly="true"></mt-field>
        <mt-field label="证件号" placeholder="请输入证件号" v-model="guest.certificateID"></mt-field>
        <mt-field label="到访车辆" placeholder="请输入车牌号" v-model="guest.carID">
        </mt-field>
    </div>
    <added-list :lists="guestList" @delete="deleteGuest"></added-list>
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
import { Field, Toast, Cell, MessageBox, Picker, Popup } from "mint-ui";
import { genderSlots, certificateTypeSlots } from "@/testData.js";
import layout from "@/components/layout";
import addedList from '@/components/addedList'
export default {
  name: "add-guest",
  components: {
    Field,
    Toast,
    Cell,
    Popup,
    Picker,
    layout,
    addedList
  },
  props: ["headParams"],
  data() {
    return {
      guest: {
        address: "",
        name: "",
        phone: "",
        gender: "",
        certificateType: "",
        certificateID: "",
        carID: ""
      },
      popupVisible: false,
      slots: [],
      temp: ""
    };
  },
  methods: {
    goback() {
      this.$router.push({ name: "guestRegister" });
    },
    confirm() {
      if (Object.values(this.guest).every(value => value)) {
        this.$store.commit("addGuest", { ...this.guest, id: Date.now() });
        this.goback();
      } else {
        Toast("请填写完整信息！");
      }
    },
    deleteGuest(guest) {
      MessageBox.confirm(`确定要删除“${guest.name}”?`, "提示")
        .then(action => {
          if (action) {
            this.$store.commit("deleteGuest", guest.id);
          }
        })
        .catch(() => {});
    },
    onValuesChange(picker, values) {
      this.temp = values[0] ? values[0].value : "";
    },
    selectGender() {
      this.slots = genderSlots;
      this.popupVisible = true;
    },
    selectCertificate() {
      this.slots = certificateTypeSlots;
      this.popupVisible = true;
    },
    saveSeleted() {
      if (["male", "female"].includes(this.temp)) {
        this.guest.gender = this.temp;
      } else {
        this.guest.certificateType = this.temp;
      }
      this.popupVisible = false;
    }
  },
  computed: {
    guestList() {
      return this.$store.state.guestsInfo;
    }
  }
};
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
