<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import url('https://cdn.staticfile.org/normalize/8.0.0/normalize.min.css');
@import url('https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.min.css');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  overflow: auto;
  background-color: #eee;
  font-size: 16px;  
}
html,body{
  height:100%;
}
</style>
