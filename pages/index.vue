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
  name: 'IndexPage',
  components: { Search, ListCard },
  data() {
    return {
      userlist: data,
      search: '',
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
