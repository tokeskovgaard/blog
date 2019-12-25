<template>
    <img :src="src" >
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
      height: 100%;
      object-fit: cover;
      object-position: 50% 50%;
  }
</style>
