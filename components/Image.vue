<template>
    <figure>
        <!--        <picture>-->
        <!--            <source :data-srcset="require(`~assets/${src}?webp`)" type="image/webp">-->
        <!--            <source :data-srcset="require(`~assets/${src}`)" type="image/jpg">-->
        <!--            <img :data-src="require(`~assets/${src}`)" class="lazyload" alt="Alternate text for the image">-->
        <!--        </picture>-->
        <!--        <img ref="image" :src="require(`~/assets/${src}?sqip`)" class="lazyload">-->
        <img
                data-sizes="auto"
                :src="require(`~/assets/images/${src}?sqip`)"
                :data-srcset="` ${require(`~/assets/images/${src}?resize&size=300`)} 300w,
                                ${require(`~/assets/images/${src}?resize&size=600`)} 600w,
                                ${require(`~/assets/images/${src}?resize&size=900`)} 900w,
                                ${require(`~/assets/images/${src}?resize&size=2000`)} 2000w,
                                ${require(`~/assets/images/${src}?resize&size=4000`)} 4000w
                               `"
                class="lazyload"/>
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

      // data: () => {
      //   return {
      //     imageSrc: null
      //   }
      // },
      // mounted() {
      //   fetch(require(`~/assets/${this.src}`))
      //     .then(data => {
      //       let imageElement = this.$refs.image;
      //       // imageElement.setAttribute("src",data.url);
      //       // this.imageSrc = data.url;
      //       console.log(data)
      //     })
      // }
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
</style>
