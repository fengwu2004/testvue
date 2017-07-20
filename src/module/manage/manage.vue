<template>
  <div class="manage">
    <div>{{ val }}</div>
  </div>
</template>

<script>
  export default {
    name: 'manage',
    data: {
      val:'你好，这是管理界面'
    }
  }
</script>

<style scoped>
  .manage {
    background-color: green;
  }
</style>
