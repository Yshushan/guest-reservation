<template>
    <div id="add-area">
      <mt-header title="访客预约登记" fixed>
        <mt-button icon="back" slot="left" @click.native="goback">返回</mt-button>
      </mt-header >
      <div class="content">
        <mt-cell v-for="area of areas"
                :key="area.id"
                :title="area.value"
                :to="{name: 'addSubArea', params: {sub: area.id}}"
                @click.native ="updateArea(area)"
                >
                <i class="iconStyle fa fa-angle-right"></i>
        </mt-cell>
      </div>
    </div>
</template>

<script>
import { areas } from '@/testData.js'
export default {
  name: 'add-area',
  data () {
    return {
      areas: []
    }
  },
  mounted () {
    // fetch areas data
    // fetch(url).then(res=>res.json()).then(data => this.areas = data)
    this.areas = areas
  },
  methods: {
    goback () {
      this.$router.push({ name: 'guestRegister' })
    },
    updateArea (area) {
      this.$store.commit('updateArea', area)
    }
  }
}
</script>

<style lang="scss" scoped>
  #add-area{
    position: relative;
    .content{
      position: absolute;
      top: 40px;
      width: 100%
    }
  }
</style>
