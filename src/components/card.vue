<template>
  <div class="bg">
  <div class="card">
    <div class="title">
      <img src="../assets/cardicon.png"/><label style="color: white;font-size: 1.5rem;font-weight: bold">智慧公交卡</label>
    </div>
    <div style="font-size: 0.8rem;color: #a4efff;padding-bottom: 5px">当前车站</div>
    <div style="color: white;padding-bottom: 10px">张江路祖冲之路</div>
    <div style="font-size: 0.8rem;color: #a4efff;height: 1rem;padding-bottom: 5px">
      <label style="float: left">当前班次</label><label style="float:right;">方向</label>
    </div>
    <div style="clear: both;padding-bottom: 60px;height: 1rem;color: white">
      <label style="float: left">申川专线</label><label style="float:right;">火车站</label>
    </div>
    <label class="avatar">
      <img src="../assets/avatarbg.png" width="60" height="60"/>
      <img :src="user.wxHeadimgurl" width="50" height="50" style="border-radius: 50%"/>
    </label>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'card',
    props:['user']
  }

</script>

<style scoped>
  .bg {
    background-image: url("../assets/cardbg.png");
    background-size: 100% 100%;
    position: relative;
    width: 100%;
  }

  .card {
    position: relative;
    background-image: url("../assets/card.png");
    background-size: 100% 100%;
    width: 80%;
    left: 0;
    right: 0;
    top: 20px;
    margin: auto;
  }

  .card > div {

    padding-left: 30px;
    padding-right: 30px;
  }

  .title {

    line-height: 50px;
    height: 50px;
    padding-top: 15px;
  }

  .title > img {

    width: 25px;
    height: 25px;
    vertical-align: middle;
  }

  .title > label {

    padding-left: 20px;
    line-height: 50px;
    vertical-align: middle;
  }

  .avatar {
    right: 30px;
    top: 10px;
    width: 60px;
    height: 60px;
    position: absolute;
    text-align: center;
  }

  .avatar > img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }

</style>
