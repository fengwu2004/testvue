<template>
  <div class="login">
    <div>{{ getInput(obj) }}</div>
  </div>
</template>

<script>

  function getInput(obj) {
    console.log(obj)
    return obj.value + '!!!!!!!!!!!'
  }

  export default {
    props:['obj'],
    name: 'login',
    data:function() {
        return {
          getInput:getInput
        }
    }
  }

</script>

<style scoped>
  .login {
    background-color: red;
  }
</style>
