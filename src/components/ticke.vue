<template>
  <div class="ticket">
    <div class="result">
      <img v-show="doorStatus === payfailed" src="../assets/failed.png" width="80" height="75"/>
      <img v-show="doorStatus === unlockfailed" src="../assets/unlockfailed.png" width="80" height="83"/>
      <img v-show="doorStatus === unlocksuccess" src="../assets/unlocksuccess.png" width="80" height="83"/>
      <img v-show="doorStatus === unlocking" src="../assets/circle.gif" width="80" height="80"/>
      <p v-show="doorStatus === unpay">&yen 2.00</p>
    </div>
    <div id="tip">
    {{ message }}
    </div>
    <p class="bottomTip">乘客：如需开具发票，请联系快运公司告知开票详情</p>
  </div>
</template>

<script>

  function getMessage() {

    switch (this.doorStatus) {
      case this.payfailed:
        return '支付失败，请重新支付!'
      case this.unlockfailed:
        return '闸机开启失败，请重试!'
      case this.unlocksuccess:
        return '闸机开启成功，祝您乘车愉快!'
      case this.unlocking:
        return '开闸中...!'
      case this.unpay:
        return '全程统一票价'
    }
  }

  export default {
    name:'ticket',
    props:['doorStatus'],
    data:function() {
      return {
        payfailed:0,
        unlockfailed:1,
        unlocksuccess:2,
        unlocking:3,
        unpay:4,
      }
    },
    computed:{
      message:getMessage
    }
  }

</script>

<style scoped>

  .ticket {

    background-image: url("../assets/ticketbg.png");
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
