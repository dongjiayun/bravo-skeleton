<template>
  <div id="app">
    <span>示例：</span>
    <div style="background-color: #334880;height: 300px;width: 400px"  v-skeleton.block.texts.circle="loading"></div>
    <div style="background-color: #334880;height: 400px;width: 220px;margin-top: 40px"  v-skeleton.list="loading"></div>
    <div style="background-color: #334880;height: 200px;width: 240px;margin-top: 40px"  v-skeleton.image="loading"></div>
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
  mounted(){
    // setInterval(()=>{
    //   this.loading = !this.loading
    // },1000)
  }
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
