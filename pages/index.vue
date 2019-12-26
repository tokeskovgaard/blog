<template>
    <div class="container">
        <h1>My fast blog</h1>
        <h2>Posts</h2>
        <ul class="posts">
            <li v-for="post of posts" class="post">
                <nuxt-link :to="`/blog/${post.link}`">
                    <LazyImage :src="post.attributes.thumbnail"/>
                    <h3 class="blog__title">{{post.attributes.title}}</h3>
                    <p class="blog__description">{{post.attributes.description}}</p>
                </nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
  import Logo from '~/components/Logo.vue'
  import LazyImage from '~/components/LazyImage.vue'
  import posts from '~/content/blogs.json'

  export default {
    components: {
      Logo, LazyImage
    },

    transition: 'fade',

    async asyncData({ app }) {

      async function lookupBlog(post) {
        const wholeMD = await import(`~/content/blog/${post.slug}.md`)
        return {
          attributes: wholeMD.attributes,
          link: post.slug
        }
      }
      const res = await Promise.all(posts.map(post => lookupBlog(post)))
      return { posts: res }
    }
  }
</script>

<style lang="scss">
    .container {
        margin: 1rem;
        min-height: 100vh;
    }

    .posts {
        display: grid;
        grid-template-columns: 1fr;
        grid-row-gap: 2rem;
        padding: 0;
        text-decoration: none;
    }

    .post {
        list-style: none; width: 100%;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        text-align: left;
    }

    .post a {
        text-decoration: none;
    }


    .post:hover .blog__title { color: #136207;}

    .blog__title {color: black; }

    .blog:hover .blog__title {color: rebeccapurple;}

    .blog__description {color: grey;}

    @media (min-width: 1000px) {
        .posts {
            grid-template-columns: 1fr 1fr;
            grid-column-gap: 1rem;
        }
    }



</style>
