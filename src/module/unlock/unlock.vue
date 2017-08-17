<template>
<div>
  <bleconnect v-bind:status="status" v-show="status !== 2"></bleconnect>
  <div v-show="status === 2" class="bg">
    <card v-bind:user="data.user"></card>
    <ticket v-bind:doorStatus="data.doorStatus"></ticket>
    <bottom v-on:success="successFn"></bottom>
  </div>
</div>
</template>

<script>

  import card from '../../components/card.vue'
  import ticket from '../../components/ticke.vue'
  import bottom from '../../components/Bottom.vue'
  import bleconnect from '../../components/bleconnect.vue'

  function payAndUnlockSuccess() {

    this.data.doorStatus = 3

    setTimeout(this.openLockSuccess, 1000)
  }

  export default {
    name:'unlock',
    components: {
      card,
      ticket,
      bottom,
      bleconnect
    },
    props:['data', 'status'],
    methods:{
      successFn:payAndUnlockSuccess,
      openLockSuccess:function() {

        this.data.doorStatus = 2
      }
    }
  }

</script>

<style scoped>

  .bg {
    position: absolute;
    left: 0;
    right:0;
    top:0;
    bottom: 0;
  }

</style>
