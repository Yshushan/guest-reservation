<template>
    <div id="add-area">
      <layout v-bind="headParams">
        <mt-cell v-for="area of mainAreas"
                :key="area.id"
                :title="area.value"
                :to="{name: 'addSubArea'}"
                @click.native="$store.commit('updateMainArea', area)">
                <i class="iconStyle fa fa-angle-right"></i>
        </mt-cell>
      </layout>
    </div>
</template>

<script>
import { mainAreas } from '@/testData.js'
import layout from '@/components/layout'
export default {
  name: 'add-area',
  components:{
    layout
  },
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

<style lang="scss" scoped>

</style>
