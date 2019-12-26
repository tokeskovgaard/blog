<template>
    <div>
        <div class="intro">
            <div class="intro__description">
                <div class="intro__description__preTitle">{{date}}</div>
                <h1 class="intro__description__title">{{ title }}</h1>
                <p class="intro__description__postTitle">{{description}}</p>
            </div>
            <div class="intro__thumbnail">
                <app-image :src="thumbnail" class="thumbnail" :alt="title"/>
            </div>
        </div>
        <div class="content" v-html="html"></div>
    </div>
</template>

<script lang="ts">
  import { format } from 'date-fns'
  import { gsap } from "gsap/dist/gsap";
  import Image from '~/components/Image.vue'

  export default {
    components: {
      'app-image': Image
    },

    mounted() {
      gsap.from(".intro__description__postTitle", {x: 100, opacity: 0, duration: 1, delay: 0.0});
    },

    async asyncData({ params }) {
      const post = await import(`~/content/blog/${params.slug}.md`)
      const attr = post.attributes
      const slug = params.slug

      const {
        author,
        authorlink,
        date,
        summary,
        thumbnail,
        description,
        title,
        type,
        update
      } = attr

      const dateOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }

      const publishedDate = new Date(date)
      const updatedDate = new Date(update)
      const published = publishedDate.toLocaleDateString('en-GB', dateOptions)
      const updated = updatedDate.toLocaleDateString('en-GB', dateOptions)

      return {
        title,
        author,
        authorlink,
        date: format(publishedDate, 'd MMMM yyyy'),
        update,
        published,
        updated,
        type,
        thumbnail,
        description,
        summary,
        slug,
        html: post.html
      }
    }
  }
</script>

<style>
    :root {
        --context-max-width: 600px;
    }

    .intro {
        display: grid;
        grid-template-columns: 100%;
        /*grid-auto-rows: 300px;*/
        overflow: hidden;
    }

    @media (min-width: 1000px) {
        .intro {
            grid-template-columns: 50% 50%;
        }

        .intro__description {
            justify-self: flex-end;
        }
    }

    .intro__description {
        max-width: 300px;
        /*justify-self: center;*/
        align-self: center;
        margin: 30px;
    }

    .content {
        display: grid;
        margin: auto;
        padding: 1rem;
        max-width: var(--context-max-width);
    }
</style>
