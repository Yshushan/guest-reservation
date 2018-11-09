<template>
  <div id='add-material'>
    <layout v-bind="headParams">
      <mt-button slot="header-right" @click.native="confirm">确定</mt-button>
      <div class="material-form">
        <mt-field label="物件名称" placeholder="请输入物件名称" v-model="material.name"></mt-field>
        <mt-field label="数量" placeholder="请输入物件数量" v-model="material.count"></mt-field>
        <mt-field label="型号" placeholder="请输入物件类型" v-model="material.type"></mt-field>
        <mt-field label="备注" placeholder="100字以内" type="textarea" rows="3" v-model="material.remark"></mt-field>
      </div>
      <added-list :lists="materialList" @delete="deleteMaterial"></added-list>
    </layout>
  </div>
</template>

<script>
import { Field, Toast, Cell, MessageBox } from "mint-ui";
import layout from '@/components/layout'
import addedList from '@/components/addedList'
export default {
  name: "add-material",
  components: {
    Field,
    Toast,
    Cell,
    layout,
    addedList
  },
  props: ['headParams'],
  data() {
    return {
      material: {
        name: "",
        count: "",
        type: "",
        remark: ""
      }
    };
  },
  methods: {
    confirm() {
      if (Object.values(this.material).every(value => value)) {
        this.$store.commit("addMaterial", { ...this.material, id: Date.now() });
        this.$router.push({name: 'guestRegister'})
      } else {
        Toast("请填写完整信息！");
      }
    },
    deleteMaterial(material) {
      MessageBox.confirm(`确定要删除“${material.name}”?`, "提示").then(action => {
        if (action) {
          this.$store.commit("deleteMaterial", material.id);
        }
      }).catch(()=>{})
    }
  },
  computed: {
    materialList() {
      return this.$store.state.materialsInfo;
    }
  }
};
</script>

