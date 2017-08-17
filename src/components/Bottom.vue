<template>
<div class="bottom">
  <div class="submit" v-on:click="payorder()" v-show="paysuccess !== 1">立即支付</div>
  <div class="submitSuccess" v-show="paysuccess === 1">
    <img src="../assets/paysuccess.png" width="40" height="40"><label>  支付成功</label>
  </div>
  <!--<div class="submit">重新开闸</div>-->
  <!--<div class="submitSuccess">-->

  <!--</div>-->
</div>
</template>

<script>

  import { beaconMgr } from '../module/unlock/idrBeaconManager'

  function paySuccess() {

    this.$emit('success', 1)

    this.$data.paysuccess = 1
  }

  function doPay() {

    beaconMgr.pay(this.paySuccess)
  }

  export default {
    name: 'bottom',
    props: ['deviceid'],
    methods: {
      payorder:doPay,
      paySuccess:paySuccess,
    }
    ,
    data: function() {
      return {
        paysuccess:0,
      }
    }
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

  .submitSuccess {

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

  .submitSuccess > img {

    vertical-align: middle;
  }

  .submitSuccess > label {

    color: #43A6EA;
    font-size: 1.5rem;
    vertical-align: middle;
  }

  .submit:active {

    background-image: url("../assets/btnactive.png");
    background-size: 100% 100%;
  }

</style>
