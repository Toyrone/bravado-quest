<template>
  <div class="main">
    <div class="main__layout">
      <Search v-model="search" />
      <br />
      <br />
      <ListCard
        v-for="user in filteredUserlist"
        :key="user.email"
        :user="user"
        :filter="search"
      />
    </div>
  </div>
</template>

<script>
import Search from '../components/Search.vue'
import ListCard from '../components/ListCard.vue'
import data from '../data.json'

export default {
  name: 'SearchableQuests',
  components: { Search, ListCard },
  props: {
    initialSearch: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      userlist: data,
      search: this.initialSearch,
    }
  },
  computed: {
    filteredUserlist() {
      return this.userlist.data.filter((user) => {
        const keys = ['name', 'email', 'title', 'address']
        const search = this.search.toLowerCase()
        return keys.some((key) => {
          return user[key].toLowerCase().includes(search)
        })
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
