<template>
  <div id="reservation">
    <mt-header title="访客预约">
      <mt-button icon="back" slot="left" @click.native="goback">返回</mt-button>
    </mt-header>
    <div class="btnBox">
      <mt-button class="btn" type="primary" size="large" @click.native="$router.push({ name: 'guestRegister' })">预约登记</mt-button>
      <mt-button class="btn" type="primary" size="large" @click.native="$router.push({ name: 'visitRecords' })">来访记录</mt-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'reservation',
  methods: {
    goback () {
      if (history.length) {
        this.$router.go(-1)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#reservation{
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .btnBox{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    margin-bottom: 40px;
    .btn{
      width: 95%;
    }
  }
}
</style>
