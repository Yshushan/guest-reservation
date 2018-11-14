<template>
  <div id="record-detail">
    <layout title="到访详情" back="visitRecords">
      <mt-cell title="状态" :value="recordDetail.status | dictTransform('status')"></mt-cell>
      <mt-cell title="访问时间" :value="recordDetail.createDate | formatTime"></mt-cell>
      <mt-cell title="访问类型" :value="recordDetail.visitType | dictTransform('visitType')"></mt-cell>
      <mt-cell title="到访区域" :value="recordDetail.visitArea"></mt-cell>
      <mt-cell title="被访人姓名" :value="recordDetail.employee.userName"></mt-cell>
      <mt-cell title="被访人手机号" :value="recordDetail.employee.userPhone"></mt-cell>
      <mt-cell title="来访人员" class="group-head"></mt-cell>
		  <fd-card v-for="(guest, index) of recordDetail.guests" :key="index" :group="guest"></fd-card>
      <mt-cell title="携带物品" class="group-head" v-if="recordDetail.guestBelongs.length"></mt-cell>
		  <fd-card v-for="(material, index) of recordDetail.guestBelongs" :key="index+100" :group="material"></fd-card>
      <mt-cell title="其它" class="group-head" v-if="recordDetail.carNumber"></mt-cell>
      <mt-cell title="到访车辆" :value="recordDetail.carNumber" v-if="recordDetail.carNumber"></mt-cell>

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

<style lang="scss" scoped>
#record-detail{
  .group-head{
    background-color: #eee;
    height: 40px;
  }
}
</style>
