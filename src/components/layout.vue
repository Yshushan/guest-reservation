<template>
    <div id="layout">
        <mt-header :title="title" fixed>
            <mt-button icon="back" slot="left" @click.native="goback">返回</mt-button>
            <div slot="right"><slot name="header-right"></slot></div>
        </mt-header>
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
  name: 'layout',
  props: ['title', 'back'],
  methods: {
    goback () {
      this.$router.push({ name: this.back })
    }
  }
}
</script>

<style lang="scss" scoped>
#layout{
    position: relative;
    .content{
        position: absolute;
        top: 40px;
        width: 100%;
    }
}
</style>
