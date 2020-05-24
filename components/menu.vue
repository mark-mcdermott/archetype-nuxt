<template lang="pug">
  p.nav
    NuxtLink(v-if="menuitem != 'home'" to="/") home
    span(v-if="menuitem === 'home'") home
    span.pipe |

    NuxtLink(v-if="menuitem != 'one'" to="/one") one
    span(v-if="menuitem === 'one'") one
    span.pipe | 
    
    NuxtLink(v-if="menuitem != 'two'" to="/two") two
    span(v-if="menuitem === 'two'") two
    span.pipe |    
</template>

<script>
export default {
  name: 'ArchetypeMenu',
  props: {
    menuitem: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.nav {
  margin: 6px 4px 3px 4px;
}

.nav a {
  text-decoration: none;
}

.nav .pipe {
  padding: 4px;
}
</style>
