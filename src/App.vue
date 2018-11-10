<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import url('https://cdn.staticfile.org/normalize/8.0.0/normalize.min.css');
@import url('https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.min.css');
@import url('https://cdn.staticfile.org/simple-line-icons/2.4.1/css/simple-line-icons.min.css');
@import url('https://cdn.staticfile.org/typicons/2.0.9/typicons.min.css');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  overflow: auto;
  background-color: #eee;
}
html,body{
  height:100%;
}
// .mint-field-core{
//   text-align: center;
// }
// .iconStyle{
//   margin-right: 5px;
//   color: rgb(92, 238, 136);
// }
.mint-cell{
  margin: 6px 8px;
  border-radius: 5px;
}
</style>
