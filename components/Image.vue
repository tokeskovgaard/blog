<template>
    <img :src="src">
</template>
<script type="ts">
  export default {
    props: {
      src: {
        type: String,
        required: true
      }
    }
  }
</script>
<style scoped>
  img {
      width: 100%;
      object-fit: cover;
      height: 100%;
  }
</style>
