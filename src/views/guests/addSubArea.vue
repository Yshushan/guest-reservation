<template>
    <div id="add-sub-area">
      <layout v-bind="headParams">
        <mt-cell v-for="area of subAreas"
                :key="area.id"
                :title="area.value"
                :to="{name: 'guestRegister'}"
                @click.native="$store.commit('updateSubArea', area)">
          <i class="iconStyle fa fa-angle-right"></i>
        </mt-cell>
      </layout>
    </div>
</template>

<script>
import { subAreas } from '@/testData.js'
export default {
  name: 'add-sub-area',
  data () {
    return {
      subAreas: []
    }
  },
  props: ['headParams'],
  created () {
    // fetch sub-areas data
    // fetch(url, this.mainAreaID).then(res=>res.json()).then(data => this.subAreas = data)
    // 模拟测试
    this.subAreas = subAreas
  },
  computed: {
    mainAreaID(){
      return this.$store.state.mianArea.id
    }
  }
}
</script>

