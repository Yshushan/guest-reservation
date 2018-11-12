<template>
    <div id="add-area">
      <layout title="选择到访区域" back="guestRegister">
        <mt-cell style="margin:6px; border-radius:5px;"
                v-for="area of mainAreas"
                :key="area.realId"
                :title="area.nodeName"
                :to="{name: 'addSubArea', params:{areaId: area.realId}}"
                @click.native="$store.commit('updateMainArea', area)">
                <i class="fa fa-angle-right"></i>
        </mt-cell>
      </layout>
    </div>
</template>

<script>
import { mainAreas } from '@/testData.js'
export default {
  name: 'add-area',
  data () {
    return {
      mainAreas: []
    }
  },
  mounted () {
    // fetch mainAreas data
    // fetch(url).then(res=>res.json()).then(data => this.mainAreas = data)
    this.mainAreas = mainAreas
  }
}
</script>
