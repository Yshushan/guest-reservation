<template>
  <div class="home">
    <router-link to="/reservation">访客预约</router-link>
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
  }
}
</script>
