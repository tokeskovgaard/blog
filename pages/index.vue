<template>
    <div class="container">
        <div>
            <h1 class="title">
                blog
            </h1>
            <h2 class="subtitle">
                My fast ass blog
            </h2>
            <ul class="blogs">
                <li v-for="blog of blogList">
                    <a :href="`blog/${blog.link}`" class="blog">
                        <div class="blog__image">
                            <img :src="blog.attributes.thumbnail">
                        </div>
                        <h3 class="blog__title">{{blog.attributes.title}}</h3>
                        <p class="blog__description">{{blog.attributes.description}}</p>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
  import Logo from '~/components/Logo.vue'
  import blogs from '~/content/blogs.json'

  export default {
    components: {
      Logo
    },
    async asyncData({ app }) {
      async function lookupBlog(blog) {
        const wholeMD = await import(`~/content/blog/${blog.slug}.md`)
        return {
          attributes: wholeMD.attributes,
          link: blog.slug
        }
      }

      const res = await Promise.all(blogs.map(blog => lookupBlog(blog)))
      return { blogList: res }
    }
  }
</script>

<style scoped>
    .container {
        margin: 0 auto;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .title {
        font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
        'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        display: block;
        font-weight: 300;
        font-size: 100px;
        color: #35495e;
        letter-spacing: 1px;
    }

    .subtitle {
        font-weight: 300;
        font-size: 42px;
        color: #526488;
        word-spacing: 5px;
        padding-bottom: 15px;
    }

    li {list-style: none;}

    .blogs {

    }

    .blog {
        max-width: 33%;
        display: grid;
        grid-auto-columns: 1fr;
        grid-auto-rows: 200px auto auto;
        overflow: hidden;
        text-align: left;
        text-decoration: none;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    .blog__image {overflow: hidden;}

    .blog__title {color: black; }

    .blog:hover .blog__title {color: rebeccapurple;}

    .blog__description {color: grey;}
</style>
