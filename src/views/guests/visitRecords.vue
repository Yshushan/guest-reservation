<template>
  <div id="visit-records">
    <layout title="到访记录" back="reservation">
      <mt-cell v-for="record of visitRecords"
              :key="record.id"
              class="card-cell"
              :to="{name: 'recordDetail', params:{recordId: record.id}}">
        <div slot="title" class="card">
          <div class='item'>
            <span class="time">{{record.visitDate | formatTime}}</span>
            <span class="status-base" :style="{ 'color': statusToColor[record.status]}">
              {{record.status | dictTransform('status')}}
            </span>
          </div>
          <div class="item">
            <span>被访人: {{record.userName}}</span>
            <span>到访类型: {{record.visitType | dictTransform('visitType')}}</span>
          </div>
          <div class="item">
            <span>到访区域: {{record.visitArea}}</span>
            <i class="fa fa-angle-right"></i>
          </div>
        </div>
      </mt-cell>
    </layout>
  </div>
</template>

<script>
import { visitRecords } from '@/testData.js'

const statusToColor = {
  pending: 'orange',
  success: 'green',
  reject: 'red'
}
export default {
  name: 'visit-records',
  data () {
    return {
      visitRecords: [],
      statusToColor,
    }
  },
  created () {
    // fetch data
    this.visitRecords = visitRecords
  }
}
</script>

<style lang="scss" scoped>
#visit-records{
    .card-cell{
      margin: 6px;
      border-radius: 5px;
      .card{
        font-size: 15px;
        .item{
          display: flex;
          justify-content: space-between;
          padding: 0 3px 13px 3px;
          &:first-child{
            padding: 10px 3px;
            .time{
              font-size: 13px;
              color: #999;
           }
           .status-base{
             font-size: 15px;
             font-weight: 700;
           }
          }
        }
      }
    }
}
</style>
