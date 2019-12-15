<template>
    <div class="container">
        <h2>Posts</h2>
        <ul class="posts">
            <li v-for="post of posts" class="post">
                <a :href="`blog/${post.link}`">
                    <img class="blog__image" :src="post.attributes.thumbnail">
                    <h3 class="blog__title">{{post.attributes.title}}</h3>
                    <p class="blog__description">{{post.attributes.description}}</p>
                </a>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
  import Logo from '~/components/Logo.vue'
  import posts from '~/content/blogs.json'

  export default {
    components: {
      Logo
    },
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

<style scoped>
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

    .blog__image {
        width: 100%;
        height: auto;
    }

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
