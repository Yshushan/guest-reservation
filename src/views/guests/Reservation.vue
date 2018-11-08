<template>
  <div id="reservation">
    <mt-header title="访客预约" fixed>
      <mt-button icon="back" slot="left" @click.native="goback">返回</mt-button>
    </mt-header>
    <div class="btnBox">
      <mt-button class="btn" type="primary" size="large" @click.native="goRegister">预约登记</mt-button>
      <mt-button class="btn" type="primary" size="large">来访记录</mt-button>
    </div>
  </div>
</template>

<script>
import { Header, Button } from 'mint-ui'
export default {
  name: 'reservation',
  components: {
    Header,
    Button
  },
  methods: {
    goback () {
      if (history.length) {
        this.$router.go(-1)
      }
    },
    goRegister () {
      this.$router.push({ name: 'guestRegister' })
    }
  }
}
</script>

<style lang="scss" scoped>
#reservation{
  height: 100%;
  position: relative;
  .btnBox{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    width: 100%;
    position: absolute;
    bottom: 50px;
    .btn{
      width: 95%
    }
  }
}
</style>
