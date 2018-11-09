<template>
    <div id="fd-card">
        <div class="card-head flex-box" @click="isFold = !isFold" > 
            <span>{{guest.name}}</span>
            <span>
                <i class="iconStyle fa fa-angle-right" v-show="isFold"></i>
                <i class="iconStyle fa fa-angle-down" v-show="!isFold"></i>
            </span>
        </div>
        <div class="card-content" v-show="!isFold">
            <div v-for="(value,key) of guest" :key="key" class="flex-box">
                <span>{{key}}</span>
                <span>{{value}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'fd-card',
    data(){
        return {
            isFold: true
        }
    },
    props:{
        guest:Object
    }
}
</script>

<style lang="scss" scoped>
#fd-card{
    box-sizing: border-box;
    .flex-box{
        display: flex;
        justify-content: space-between;
        padding: 5px 0;
    }
    .card-head{
        padding: 12px 10px;
        background-color: #fff;
    }
    .card-content{
        overflow: hidden;
        background-color: #eee;
        padding: 0 15px;
    }
}

</style>


