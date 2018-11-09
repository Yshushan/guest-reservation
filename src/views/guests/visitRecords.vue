<template>
  <div id="visit-records">
    <layout v-bind="headParams">
      <mt-cell v-for="record of visitRecords" :key="record.id" class="card-cell" :to="{name: 'recordDetail',params:{id:record.id}}">
        <div slot="title" class="card">
          <div class='item'>
            <span class="time">{{record.time}}</span>
            <span :style="{color:record.status==='success'? 'green':'red', 'font-weight': 600}">
              {{record.status}}
            </span>
          </div>
          <div class="item">被访人: {{record.employee}}</div>
          <div class="item">
            <span>到访地区: {{record.area}}</span>
            <span>到访原因: {{record.reason}}</span>
          </div>
        </div>
        <i class="iconStyle fa fa-angle-right"></i>
      </mt-cell>
    </layout>
  </div>
</template>

<script>
import { visitRecords } from '@/testData.js'
import layout from '@/components/layout'
export default {
  name: 'visit-records',
  data () {
    return {
      visitRecords: []
    }
  },
  components:{
    layout
  },
  props: ['headParams'],
  mounted () {
    // fetch data
    this.visitRecords = visitRecords
  }
}
</script>

<style lang="scss" scoped>
#visit-records{
    .card-cell{
      margin: 8px;
      border-radius: 5px;
      .card{
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
          }

        }
      }
    }
}
</style>
