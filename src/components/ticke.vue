<template>
  <div class="ticket">
    <div class="result">
      <img src="/static/assets/失败.png" width="80" height="75"/>
      <img src="/static/assets/开闸失败.png" width="80" height="83"/>
      <img src="/static/assets/开闸成功.png" width="80" height="83"/>
      <img src="/static/assets/缓存.gif" width="80" height="80"/>
      <p>&yen 2.00</p>
    </div>
    <div id="tip">
    全程统一票价
    </div>
    <p class="bottomTip">乘客：如需开具发票，请联系快运公司告知开票详情</p>
  </div>
</template>

<script>

  export default {

    name:'ticket'
  }

</script>

<style scoped>

  .ticket {

    background-image: url("/static/assets/票背景.png");
    background-size: 100% 100%;
    margin-top: 20px;
    height: 300px;
    width: 100%;
    position: relative;
    text-align: center;
  }

  .bottomTip {

    position: absolute;
    bottom: 10px;
    width: 80%;
    left: 0;
    right: 0;
    margin: auto;
    font-size: 0.8rem;
    padding-bottom: 10px;
    color: #b7b7b7;
  }

  .result {

    height: 50%;
    position: relative;
  }

  .result > img {

    position: absolute;
    left: 0;right: 0;margin: auto;
    bottom: 10px;
  }

  .result > p {

    position: absolute;
    left: 0;right: 0;
    margin: auto;
    bottom: -15px;
    font-size: 4rem;
    font-weight: lighter;
    font-family:Helvetica;
    color: #181818;
  }

  #tip {

    margin-top: 10px;
    color: #b7b7b7;
  }

</style>
