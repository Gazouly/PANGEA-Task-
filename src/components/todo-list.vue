<template lang="html">
  <div class="d-flex justify-space-between ">
    <div class="not-completed">
      <h2 
        class="mb-2" 
        style="text-align: center">Ongoing Tasks</h2>
      <TodoItem 
        v-for="todo in todos" 
        :key="todo.id" 
        :todo="todo"
        class="mb-3" />
    </div>
    <v-divider
      class="mx-4"
      vertical
    />
    <div class="completed">
      <h2 
        class="mb-2" 
        style="text-align: center">Completed Tasks</h2>
      <TodoItem 
        v-for="todo in completed" 
        :key="todo.id" 
        :todo="todo"
        class="mb-3" 
        :completed="true"/>
    </div>
  </div>
</template>

<script>
import TodoItem from '@/components/todo-item';

export default {
  components: {
    TodoItem
  },
  computed: {
    todos() {
      return this.$store.getters.ongoingTasks
    },
    completed() {
      return this.$store.getters.completedTasks
    }
  }
}
</script>

<style lang="css">
</style>
