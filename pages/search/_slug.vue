<template>
  <div>
    <SearchableQuests :initial-search="slug" />
  </div>
</template>

<script>
import SearchableQuests from '../../components/SearchableQuests.vue'
export default {
  name: 'SearchPage',
  components: { SearchableQuests },
  asyncData({ params }) {
    return { slug: params.slug }
  },
}
</script>

<style lang="scss" scoped></style>
