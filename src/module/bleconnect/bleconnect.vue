<template>
  <div class="bleconnect">
    <div class="center">
      <img id="connecting" src="/static/assets/缓存.gif" width="80" height="80"/>
      <img id="connectfailed" src="/static/assets/失败.png" width="80" height="75"/>
      <div id="tip">设备连接中...</div>
    </div>
  </div>
</template>

<script>

  export default  {

    name: 'bleconnect',
  }

</script>

<style scoped>

  .bleconnect {
    background-image: url("/static/assets/背景.png");
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
