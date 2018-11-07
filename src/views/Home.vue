<template>
  <div class="home">
    <p @click="goReservation">访客预约</p>
    <Calculator/>
  </div>
</template>

<script>
// @ is an alias to /src
import Calculator from '@/components/Calculator.vue'

export default {
  name: 'home',
  components: {
    Calculator
  },
  methods: {
    goReservation(){
      this.$store.commit('switchComp',{title: '访客预约登记', comp: })
    }
  }
}
</script>
