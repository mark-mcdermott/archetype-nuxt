<template lang="pug">
  div
    archetype-menu(menuitem="two")
    h1 two
    p(v-if="$fetchState.pending") Fetching...
    p(v-else-if="$fetchState.error") Error while fetching posts
    ul(v-else)
      li(v-for="post in posts.slice(0, 20)") {{post.title}}
</template>

<script>
import ArchetypeMenu from '@/components/menu'
export default {
  components: {
    ArchetypeMenu
  },
  async fetch() {
    const posts = await fetch(
      `https://jsonplaceholder.typicode.com/posts/`
    ).then((res) => res.json())

    this.posts = posts

    // if (post.id === this.$route.params.id) {
    //   this.post = post
    // } else {
    //   // set status code on server and
    //   if (process.server) {
    //     this.$nuxt.context.res.statusCode = 404
    //   }
    //   // use throw new Error()
    //   throw new Error('Post not found')
    // }
  },
  data() {
    return {
      posts: []
    }
  }
}
</script>
