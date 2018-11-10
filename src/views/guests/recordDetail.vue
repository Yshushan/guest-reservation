<template>
  <div id="record-detail">
    <layout title="到访详情" back="visitRecords">
      <mt-cell title="状态" value=""></mt-cell>
		  <fd-card :guest="guest"></fd-card>
		  <fd-card :guest="guest"></fd-card>
		  <fd-card :guest="guest"></fd-card>
		  <fd-card :guest="guest"></fd-card>
		  <fd-card :guest="guest"></fd-card>
		  <fd-card :guest="guest"></fd-card>
    </layout>
    </div>
</template>

<script>
import fdCard from '@/components/fdCard';
export default {
  name: 'record-detail',
  components:{
    fdCard,
  },
  props:['recordId'],
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
  created(){
    // fetch data
    
  }
};
</script>



