<template>
  <article class="listcard">
    <div class="listcard__avatar">
      <img :src="user.avatar" :alt="`${user.name}'s avatar`" />
    </div>
    <div class="listcard__content">
      <div class="listcard__body">
        <div class="listcard__body--flex">
          <h3
            class="listcard__title"
            v-html="$highlight(user.name, filter)"
          ></h3>
          <span v-html="$highlight(user.email, filter)"></span>
        </div>
        <small class="text--light">
          <strong v-html="$highlight(user.title, filter)"></strong>
        </small>
        <br />
        <span
          class="text--light"
          v-html="$highlight(user.address, filter)"
        ></span>
      </div>
      <div class="listcard__footer">
        <button class="listcard__btn" type="button">skip selection</button>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'ListCard',
  props: {
    user: {
      required: true,
      type: Object,
      default() {
        return {}
      },
    },
    filter: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.listcard {
  border-radius: 4px;
  display: grid;
  grid-template-columns: 134px 1fr;
  overflow: hidden;
  background: #fafafa;
  margin-bottom: 1.25rem;
  &__avatar {
    width: 134px;
    height: 136px;
    background-color: rgba(0, 0, 0, 0.25);
    object-fit: cover;
    object-position: center;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &__title {
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.33;
    max-width: 200px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    padding-right: 1rem;
    color: rgba(0, 0, 0, 0.87);
  }
  &__body {
    padding-left: 2rem;
    margin-bottom: 0.5rem;
    padding-top: 0.625rem;
    padding-right: 0.625rem;
    color: rgba(0, 0, 0, 0.54);
    font-size: 0.875rem;
    &--flex {
      display: flex;
      justify-content: space-between;
    }
  }
  &__btn {
    text-transform: uppercase;
    color: #009688;
    font-weight: 500;
    font-size: 0.875rem;
  }
  &__footer {
    padding-top: 0.857rem;
    padding-left: 2rem;
    border-top: 1px solid rgba(0, 0, 0, 0.12);
  }

  .text {
    &--light {
      color: rgba(0, 0, 0, 0.54);
    }
  }
}
</style>
