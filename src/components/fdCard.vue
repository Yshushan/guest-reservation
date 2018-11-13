<template>
    <div id="fd-card">
        <div class="card-head flex-box" @click="isFold = !isFold" >
            <span>{{guest.name}}</span>
            <span>
                <i class="fa fa-angle-right" v-show="isFold"></i>
                <i class="fa fa-angle-down" v-show="!isFold"></i>
            </span>
        </div>
        <div class="card-content" v-show="!isFold">
            <div v-for="(value,key) of guest" 
                :key="key" class="flex-box" 
                v-show="!key.includes(name)">
                <span>{{key}}</span><span>{{value}}</span>
            </div>
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
    guest: Object
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
        padding: 12px 10px;
        background-color: #fff;
        min-height: 48px;
    }
    .card-content{
        overflow: hidden;
        background-color: #eee;
        padding: 5px 15px;
        div{
          padding: 5px 0;
        }
    }
}
</style>
