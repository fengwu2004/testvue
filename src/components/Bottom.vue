<template>
<div class="bottom">
  <div class="submit">立即支付</div>
  <!--<div class="submit">重新开闸</div>-->
  <!--<div class="submitSuccess">-->

  <!--</div>-->
</div>
</template>

<script>
  export default {

    name: 'bottom'
  }

</script>

<style scoped>

  .bottom {

    width: 90%;
    position: absolute;
    height: 6rem;
    left: 0;right: 0;bottom: 0px;
    margin: auto;
  }

  .submit {

    background-image: url("../assets/btn.png");
    background-size: 100% 100%;
    position: absolute;
    width: 100%;
    height: 6rem;
    left: 0;
    right: 0;
    text-align: center;
    line-height: 5rem;
    color: white;
    margin: auto;
  }

  .submit:active {

    background-image: url("../assets/btnactive.png");
    background-size: 100% 100%;
  }

</style>
