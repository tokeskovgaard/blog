<template>
    <div>
        <div class="intro">
            <div class="intro__description">
              <span>{{date}}</span>
                <h1 class="intro__description__title">{{ title }}</h1>
              <p>{{description}}</p>
            </div>
            <div class="intro__thumbnail">
                <img :src="thumbnail" class="thumbnail" :alt="title"/>
            </div>
        </div>
        <div class="content" v-html="html"></div>
    </div>
</template>

<script lang="ts">
  export default {
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
        date,
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
    .intro {
      display: grid;
      grid-template-columns: 50% 50%;
      grid-template-rows: 300px;
      overflow: hidden;
    }
    .intro__description{
      max-width: 300px;
      justify-self: flex-end;
      align-self: center;
      margin: 30px;
    }
  .content{
    display: grid;
    margin: auto;
    margin-top: 50px;
    max-width: 500px;
  }
</style>
