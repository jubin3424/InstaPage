<template>
  <div id="app">
    <img src="../static/img/Jubin.jpg" class="profile_photo">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 20px;
  }
  .profile_photo {
    width: 250px;
    border-radius: 3px 15px;
    box-shadow: 5px 10px 15px lightgray;

  }
</style>
