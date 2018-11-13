<template>
  <div id="record-detail">
    <layout title="到访详情" back="visitRecords">
      <mt-cell title="状态" :value="recordDetail.status"></mt-cell>
      <mt-cell title="访问时间" :value="recordDetail.createDate"></mt-cell>
      <mt-cell title="访问类型" :value="recordDetail.visitType"></mt-cell>
      <mt-cell title="被访人" ></mt-cell>
      <mt-cell title="访问类型" :value="recordDetail.visitType"></mt-cell>
      
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
import fdCard from '@/components/fdCard'
import { recordDetail } from '@/testData.js'
export default {
  name: 'record-detail',
  components: {
    fdCard
  },
  props: ['recordId'],
  data () {
    return {
      recordDetail: null
    }
  },
  created () {
    // fetch data
    this.recordDetail = recordDetail
  }
}
</script>
