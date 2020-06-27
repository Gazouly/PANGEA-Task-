<template lang="html">
  <v-text-field
    label="Todo"
    placeholder="What do you have to do?"
    solo
    v-model="title"
    @keyup.enter="createTodo"
  />
</template>

<script>
export default {
  data() {
    return {
      title: ''
    }
  },
  methods: {
    createTodo() {
      let todo = {
        title: this.title,
        completed: false
      }
      this.$store.dispatch('CREATE_TODO', todo)
      this.title = ''
    }
  }
}
</script>

<style lang="css">
</style>
