<template>
    <figure :data-aspect-ratio="aspectRatio">
        <img
                data-sizes="auto"
                :src="require(`~/assets/images/${src}?sqip`)"
                :data-srcset="`
                                ${require(`~/assets/images/${src}?webp?resize&size=600`)} 600w,
                                ${require(`~/assets/images/${src}?webp?resize&size=1200`)} 1200w,
                                ${require(`~/assets/images/${src}?webp?resize&size=2000`)} 2000w
                               `"
                :alt="alt"
                class="lazyload"/>
    </figure>
</template>
<script type="ts">
  export default {
    props: {
      src: {
        type: String,
        required: true
      },
      alt: {
        type: String,
        required: false,
        default: 'Image of something'
      },
      aspectRatio: {
        default: '16:9',
        required: false,
        type: String
      }
    },
    data: function() {
      return {
        sizes: [600,1200,2000]
      }
    }

  }
</script>
<style lang="scss" scoped>

    img {
        max-width: 100%;
        max-height: 100%;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 50% 50%;
    }

    @mixin aspect-ratio($width, $height) {
        position: relative;
        &:before {
            display: block;
            content: "";
            width: 100%;
            padding-top: ($height / $width) * 100%;
        }
        > img {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
        }
    }

    [data-aspect-ratio="16:9"]{
        @include aspect-ratio(16,9);
    }
</style>
