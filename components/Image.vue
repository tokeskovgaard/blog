<template>
    <figure>
<!--        <picture>-->
<!--            <source :data-srcset="require(`~assets/${src}?webp`)" type="image/webp">-->
<!--            <source :data-srcset="require(`~assets/${src}`)" type="image/jpg">-->
<!--            <img :data-src="require(`~assets/${src}`)" class="lazyload" alt="Alternate text for the image">-->
<!--        </picture>-->
        <img ref="image" :src="require(`~/assets/${src}?lqip`)" data-state="lqip">
    </figure>
</template>
<script type="ts">
  export default {
    props: {
      src: {
        type: String,
        required: true
      }
    },

    data: () => {
      return {
        imageSrc: null
      }
    },
    mounted() {
      fetch(require(`~/assets/${this.src}`))
        .then(data => {
          let imageElement = this.$refs.image;
          imageElement.setAttribute("src",data.url);
          imageElement.setAttribute("data-state","loaded");
          this.imageSrc = data.url;
          console.log(data)
        })
    }
  }
</script>
<style scoped>
    img {
        max-width: 100%;
        max-height: 100%;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 50% 50%;
    }

    img[data-state="lqip"] {
        filter: blur(1px);
    }
</style>
