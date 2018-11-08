<template>
    <div id="add-sub-area">
        <mt-header title="选择子区域">
      <mt-button icon="back" slot="left" @click.native="goback">返回</mt-button>
    </mt-header>
        <mt-cell v-for="area of subAreas" 
        :key="area.id" 
        :title="area.value" 
        :to="{name: 'guestRegister'}"
        @click.native="updateSubArea(area)"></mt-cell>
    </div>
</template>

<script>
import { subAreas } from "@/testData.js";
export default {
  name: "add-sub-area",
  data() {
    return {
      subAreas: []
    };
  },
  props: ["sub"],
  mounted() {
    // fetch sub-areas data
    // fetch(url, sub).then(res=>res.json()).then(data => this.subAreas = data)
    this.subAreas = subAreas;
  },
  methods: {
    goback() {
      this.$router.push({ name: "addArea" });
    },
    updateSubArea(area){
        this.$store.commit('updateSubArea', area)
    }
  }
};
</script>

