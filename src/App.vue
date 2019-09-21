<template>
  <div id="app">
    <router-view/>
  </div>
</template>



<script>

export default {
}
</script>>

<style lang="less">
*{
  margin: 0;
  padding: 0;
}
li{
  list-style: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

body,html,#app{
  height: 100%;
}










</style>
