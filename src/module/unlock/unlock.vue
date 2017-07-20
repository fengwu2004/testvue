<template>
<div>
  <card></card>
  <ticket></ticket>
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
    }
  }

</script>

<style scoped>

</style>
