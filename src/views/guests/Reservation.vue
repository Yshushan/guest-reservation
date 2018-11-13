<template>
  <div id="reservation">
    <span class="back-btn" @click="goback"><i class= "fa fa-angle-left" style="margin-right: 6px; font-size: 20px"></i>返回</span>
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
        this.$router.push('/')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#reservation{
  position: relative;
  background-image: url('bg.jpg');
  background-repeat: round;
  height: 100%;
  .back-btn{
    padding: 10px 10px;
    color: #d9d9d9;
    font-size: 14px;
    position: absolute;
    top: 0;
    left: 0;
  }
  .btnBox{
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    width: 100%;
    bottom: 35px;
    .btn{
      width: 96%;
    }
  }
}
</style>
