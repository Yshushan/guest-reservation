<template>
  <div id="visit-records">
    <mt-header title="来访记录" fixed>
      <mt-button icon="back" slot="left" @click.native="goback">返回</mt-button>
    </mt-header>
    <div class="records">
      <mt-cell v-for="record of visitRecords" :key="record.id" class="card-cell" is-link :to="{}">
        <div slot="title" class="card">
          <div class='item item1'>
            <span class="time">{{record.time}}</span>
            <span>{{record.status}}</span>
          </div>
          <div class="item item2">被访人: {{record.employee}}</div>
          <div class="item3">
            <span>到访地区: {{record.area}}</span>
            <span>到访原因: {{record.reason}}</span>
          </div>
        </div>
      </mt-cell>
    </div>
  </div>
</template>

<script>
import { visitRecords } from '@/testData.js'
export default {
  name: 'visit-records',
  data () {
    return {
      visitRecords: []
    }
  },
  methods: {
    goback () {
      this.$router.push({ name: 'reservation' })
    }
  },
  mounted () {
    // fetch data
    this.visitRecords = visitRecords
  }
}
</script>

<style lang="scss" scoped>
#visit-records{
  position: relative;
  .records{
    position: absolute;
    top: 40px;
    width: 100%;
    .card-cell{
      margin: 8px;
      border-radius: 5px;
      .card{
        display: flex;
        flex-direction: column;
        .item1{
          display: flex;
          justify-content: space-between;
          padding: 10px 3px;
          .time{
            font-size: 13px;
            color: #999
          }
        }
        .item2{
          padding: 0 3px 10px 3px;
        }
        .item3{
          display: flex;
          justify-content: space-between;
          padding: 0 3px 10px 3px;
        }
      }
    }
  }
}
</style>
