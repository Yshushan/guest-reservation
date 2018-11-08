<template>
  <div id='add-material'>
    <mt-header title="添加来访人员">
      <mt-button icon="back" slot="left" @click.native="goback">返回</mt-button>
      <mt-button slot="right" @click.native="confirm">添加</mt-button>
    </mt-header>
    <div class="guest-form">
      <mt-field label="物件名称" placeholder="请输入物件名称" v-model="material.name"></mt-field>
      <mt-field label="数量" placeholder="请输入物件数量" v-model="material.count"></mt-field>
      <mt-field label="型号" placeholder="请输入物件类型" v-model="material.type"></mt-field>
      <mt-field label="备注" placeholder="100字以内" type="textarea" rows="3" v-model="material.remark"></mt-field>
    </div>
    <p class="list-header">已添加物件名单</p>
    <div class="list" v-if="materialList.length">
      <mt-cell v-for="e of materialList" :key="e.id" :title="e.name" :label="`${e.count} - ${e.type}`">
        <mt-button size="small" @click.native="deleteMaterial(e.id)"><i slot="icon" class="fa fa-minus-square"></i></mt-button>
      </mt-cell>
    </div>
    <p class="no-item" v-else>还没有添加信息！</p>
  </div>
</template>

<script>
import { Field, Toast, Cell, MessageBox} from 'mint-ui'
export default {
  name: 'add-material',
  components: {
    Field,
    Toast,
    Cell
  },
  data () {
    return {
      material: {
        name: '',
        count: '',
        type: '',
        remark: ''
      },
    }
  },
  methods: {
    goback () {
        this.$router.push({ name: 'guestRegister' })
    },
    confirm () {
      if (Object.values(this.material).every(value => value)) {
        this.$store.commit('addMaterial', { ...this.material, id: Date.now()})
        this.goback()
      } else {
        Toast('请填写完整信息！')
      }
    },
    deleteMaterial (id) {
      MessageBox.confirm('确定执行此操作?', '删除').then(action => {
        if (action) {
          this.$store.commit('deleteMaterial', id)
        }
      })
    }
  },
  computed: {
    materialList () {
      return this.$store.state.materialsInfo
    }
  }
}
</script>

<style lang="scss" scoped>
#add-material {
  .list-header {
    margin-top: 30px;
    padding: 0 10px;
  }
  .no-item {
      padding: 0 10px;
  }
}
</style>
