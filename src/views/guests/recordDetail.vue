<template>
  <div id="record-detail">
    <mt-header title="来访记录" fixed>
    	<mt-button icon="back" slot="left" @click.native="goback">返回</mt-button>
    </mt-header>
    <div class="content">
      <mt-cell title="状态" value=""></mt-cell>
		  <fd-card :guest="guest"></fd-card>
		  <fd-card :guest="guest"></fd-card>
		  <fd-card :guest="guest"></fd-card>
		  <fd-card :guest="guest"></fd-card>
		  <fd-card :guest="guest"></fd-card>
		  <fd-card :guest="guest"></fd-card>
    </div>
    </div>
</template>

<script>
import fdCard from '@/components/fdCard';
export default {
  name: 'record-detail',
  components:{
    fdCard,
  },
  props:['id'],
  data(){
    return {
      guest:{
        name: 'nicholas',
        address: 'asdfasdfasdfasd',
        gender: 'male',
        phone: '12341243252',
        idType: 'idcard',
        idNum: '3241234198571451234'
      },
      materials:[],
      record:{
        status: '申请成功',
        submitTime: '2018'
      }
    }
  },
  methods:{
    goback () {
      this.$router.push({ name: 'visitRecords'})
    }
  }
};
</script>

<style lang="scss" scoped>
#record-detail{
  position: relative;
  .content{
    position: absolute;
    top: 40px;
    width: 100%;
  }
}
</style>
