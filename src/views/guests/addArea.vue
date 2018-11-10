<template>
    <div id="add-area">
      <layout v-bind="headParams">
        <mt-cell style="margin:6px; border-radius:5px;" 
                v-for="area of mainAreas"
                :key="area.id"
                :title="area.value"
                :to="{name: 'addSubArea', params:{areaId: area.id}}"
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
  props:['headParams'],
  data () {
    return {
      mainAreas: []
    }
  },
  mounted () {
    // fetch mainAreas data
    // fetch(url).then(res=>res.json()).then(data => this.mainAreas = data)
    this.mainAreas = mainAreas
  },
}
</script>

