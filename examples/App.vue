<template>
  <div id="app">
    <span>示例：</span>
    <div style="background-color: #334880;height: 900px"  v-skeleton.block.texts.circle.pics="loading"></div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      loading:true
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
