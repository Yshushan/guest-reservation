<template>
    <div id="added-list">
        <div class="list-head">
            <slot></slot>
        </div>
        <div class="list-content" v-if="lists.length">
            <div v-for="(item,key) of lists" :key="key">
                <span>{{item.userName || item.guestName || item.name || item}}</span>
                <span>{{item.userPhone || item.guestTelphone ||item.count || ''}}</span>
                <span v-if="item.userName" @click="$emit('add', item)"><i class="fa fa-plus"></i></span>
                <span v-else  @click="$emit('delete', item)"><i class="fa fa-minus"></i></span>
            </div>
        </div>
        <div class="empty" v-else>
            无！
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
    margin-top: 40px;
    .list-head{
        padding-bottom: 10px;
        padding-left: 15px;
        color: rgb(142, 175, 236);
        font-weight: 600;
    }
    .list-content {

        color: rgb(32, 13, 13);
        div{
            background-color: rgb(178, 206, 245);
            padding: 13px 15px;
            margin: 7px;
            border-radius: 5px;
            display: grid;
            grid-template-columns: 2fr 4fr 1fr;
            span:last-child{
                text-align: right;
            }
        }
    }
    .empty{
        padding: 10px 25px;
        color: red;
    }
}
</style>
