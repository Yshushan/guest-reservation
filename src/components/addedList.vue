<template>
    <div id="added-list">
        <div class="list-head">
            已添加信息列表
        </div>
        <div class="list-content" v-if="lists.length">
            <div v-for="item of lists" :key="item.id">
                <span>{{item.name}}</span>
                <span>{{item.phone || item.type}}</span>
                <span @click="$emit('delete', item)"><i class="fa fa-minus"></i></span>
            </div>
        </div>
        <div class="empty" v-else>
            暂无任何信息！
        </div>
    </div>
</template>

<script>
export default {
    name: 'added-list',
    props: {
        lists: Array
    }
}
</script>

<style lang="scss" scoped>
#added-list{
    padding: 30px 10px; 
    .list-head{
        padding-bottom: 15px;
        color: rgb(142, 175, 236);
        font-weight: 600;
    }
    .list-content {
        background-color: rgb(178, 206, 245);
        border-radius: 5px;
        color: rgb(32, 13, 13);
        div{
            &:first-child{
                padding: 20px 10px;
            }
            padding: 0 10px 20px 10px;
            display: grid;
            grid-template-columns: 2fr 4fr 1fr;
            span:last-child{
                padding-right: 5px;
                text-align: right;
            }
        }
    }
    .empty{
        padding: 10px 30px;
        color: red;
    }
}
</style>
