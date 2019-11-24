<template>
  <div id="app">
    <MainHeader></MainHeader>
    <router-view></router-view>
  </div>
</template>

<script>
    import MainHeader from './components/MainHeader.vue'
    import MainList from './components/MainList.vue'
  
export default {
  components : {
    'MainHeader' : MainHeader,
    'MainList' : MainList
  }
}
</script>
<style>
@import '../css/common.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
