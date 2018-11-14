<template>
    <div id="fd-card">
        <div class="card-head flex-box" @click="isFold = !isFold" >
            <span>{{group.guestName || group.name}}</span>
            <span>
                <i class="fa fa-angle-right" v-show="isFold"></i>
                <i class="fa fa-angle-down" v-show="!isFold"></i>
            </span>
        </div>
        <div class="card-content" v-show="!isFold && group.guestName">
            <div class="flex-box"><span>姓名</span><span>{{group.guestName}}</span></div>
            <div class="flex-box"><span>性别</span><span>{{group.guestGender === 'male' ? '男' : '女' }}</span></div>
            <div class="flex-box"><span>公司</span><span>{{group.guestAddress}}</span></div>
            <div class="flex-box"><span>手机号</span><span>{{group.guestTelphone}}</span></div>
            <div class="flex-box"><span>证件类型</span><span>{{group.certificateType}}</span></div>
            <div class="flex-box"><span>证件号码</span><span>{{group.certificateNumber}}</span></div>
        </div>
        <div class="card-content" v-show="!isFold && group.name">
            <div class="flex-box"><span>物品名称</span><span>{{group.name}}</span></div>
            <div class="flex-box"><span>物品数量</span><span>{{group.count}}</span></div>
            <div class="flex-box" v-show="group.type"><span>物品类型</span><span>{{group.type}}</span></div>
            <div class="flex-box" v-show="group.remark"><span style="width: 30%">备注</span><span style="width: 70%;text-align:right;">{{group.remark}}</span></div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'fd-card',
  data () {
    return {
      isFold: true
    }
  },
  props: {
    group: Object
  }
}
</script>

<style lang="scss" scoped>
#fd-card{
    .flex-box{
        display: flex;
        justify-content: space-between;
    }
    .card-head{
        box-sizing: border-box;
        padding: 15px 10px;
        background-color: #fff;
        // min-height: 48px;
    }
    .card-content{
        overflow: hidden;
        background-color: #eee;
        padding: 5px 15px;
        font-size: 14px;
        color: rgb(92, 85, 85);
        div{
          padding: 5px 0;
        }
    }
}
</style>
