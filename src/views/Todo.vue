<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title v-text="title" />
    </v-toolbar>
    <v-content>
      <v-layout 
        align-center 
        fill-height 
        justify-center>
        <v-flex xs8>
          <TodoForm />
          <TodoList />
        </v-flex>
      </v-layout>
    </v-content>
  </v-app>
</template>

<script>
import TodoForm from "@/components/todo-form";
import TodoList from "@/components/todo-list";

export default {
  name: "TodoView",
  components: {
    TodoForm,
    TodoList
  },
  created() {
    this.$store.dispatch('INIT_TODO')
  },
  data() {
    return {
      title: "Vue Todos"
    };
  }
};
</script>