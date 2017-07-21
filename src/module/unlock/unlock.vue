<template>
<div>
  <card v-bind:user="data.user"></card>
  <ticket v-bind:doorStatus="data.doorStatus"></ticket>
  <bottom></bottom>
</div>
</template>

<script>

  import card from '../../components/card.vue'
  import ticket from '../../components/ticke.vue'
  import bottom from '../../components/Bottom.vue'

  export default {
    name:'unlock',
    components: {
      card,
      ticket,
      bottom
    },
    props:['data']
  }

</script>

<style scoped>

</style>
