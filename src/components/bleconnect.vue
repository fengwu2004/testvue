<template>
  <div class="bleconnect">
    <div class="center">
      <img v-show="status === 0" id="connecting" src="../assets/circle.gif" width="80" height="80"/>
      <img v-show="status === 1" id="connectfailed" src="../assets/failed.png" width="80" height="75"/>
      <div id="tip">{{ getTips }}</div>
    </div>
  </div>
</template>

<script>

  function getTips() {

    if (this.status == 0) {

      return '设备连接中...'
    }

    if (this.status == 1) {

      return '连接失败，请重试!'
    }
  }

  export default  {
    name: 'bleconnect',
    props:['status'],
    computed: {
      getTips:getTips,
    },
  }

</script>

<style scoped>

  .bleconnect {
    background-image: url("../assets/bg.png");
    background-size: 100% 100%;
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .center {

    margin: auto;
    top: 0;bottom: 0;
    left:0;right: 0;
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 10px;
    background-color: white;
  }

  .center > img {

    display: block;
    position: absolute;
    left: 0;right: 0;margin: auto;
    top: 20%;
  }

  #tip {

    width: 100%;
    text-align: center;
    color: #808080;
    font-size: 1.2rem;
    position: absolute;
    bottom: 20%;
  }

</style>
