<template lang="pug">
  div
    archetype-menu(menuitem="one")
    h1 one
    archetype-form
</template>

<script>
import ArchetypeMenu from '@/components/menu'
import ArchetypeForm from '@/components/form'
export default {
  components: {
    ArchetypeMenu,
    ArchetypeForm
  }
}
</script>
