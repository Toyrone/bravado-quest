<template>
  <label class="search" for="search">
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        opacity=".54"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.502 14h-.794l-.276-.274A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16a6.47 6.47 0 0 0 4.225-1.566l.276.274v.792l4.998 4.991L20.49 19l-4.988-5ZM9.5 14a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Z"
        fill="#000"
      />
    </svg>
    <input
      id="search"
      v-model="search"
      class="search__input"
      type="text"
      placeholder="Search..."
    />
  </label>
</template>

<script>
export default {
  name: 'AppSearch',
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      search: this.value,
    }
  },
  watch: {
    search(val) {
      this.$emit('input', val)
    },
  },
}
</script>

<style lang="scss" scoped>
.search {
  background: #fafafa;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  border-radius: 2px;
  display: inline-flex;
  align-items: center;
  position: relative;
  width: 100%;
  padding: 0.75rem 1rem;
  &__input {
    border: none;
    background: transparent;
    width: 100%;
    padding-left: 0.5rem;
    font-size: 1.5rem;
    &:focus {
      outline: none;
    }
  }
}
</style>
