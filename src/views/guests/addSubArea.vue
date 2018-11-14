<template>
    <div id="add-sub-area">
      <layout title="选择到访区域" back="addArea">
        <mt-cell style="margin:6px; border-radius:5px;"
                v-for="area of subAreas"
                :key="area.organizationId"
                :title="area.organizationName"
                :to="{name: 'guestRegister'}"
                @click.native="$store.commit('updateVisitArea', area)">
          <i class="fa fa-angle-right"></i>
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
  props: ['areaId'],
  created () {
    // fetch sub-areas data
    // fetch(url, this.areaId).then(res=>res.json()).then(data => this.subAreas = data)
    // 模拟测试
    this.subAreas = subAreas
  }
}
</script>
