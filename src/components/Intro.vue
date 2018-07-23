<template>
  <div class="hello"><br>
    <el-row type="flex" justify="center">
      <el-col :xs="24" :md="16"><span class="grid-content bg-purple">
        Joobin Youn
      </span></el-col>
    </el-row><br>
    <div class="tags">
    <el-button># Hanyang Univ</el-button> <el-button type="success" plain># SouthKorea</el-button><br>
      <el-button type="warning" plain disabled># Developer</el-button> <el-button type="danger" plain disabled># Germany</el-button><br>
      <el-button type="info" plain># Konstanz</el-button> <el-button type="primary" plain># Junior</el-button> <br>
      <el-button disabled># Seoul</el-button> <el-button type="success" plain disabled># Information System</el-button><br>
      <el-button type="primary" plain disabled># BtoB</el-button> <el-button type="info" plain disabled># Apple</el-button><br>
      <el-button type="warning" plain># Man</el-button> <el-button type="danger" plain># HelloWorld</el-button><br>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .bg-purple {
    background: #d3dce6;
    padding: 12px;
    border-radius: 7px;
  }
  .el-button {
    margin: 3px;
  }
</style>
