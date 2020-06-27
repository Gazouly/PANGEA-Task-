<template lang="html">
  <v-card>
    <v-card-title primary-title>
      <div>
        <div 
          v-if="!editMode" 
          class="todo-item">
          <h3 
            class="headline mb-0">{{ todo.title }}
          </h3>
          <p>
            <strong>Created At:</strong>
            {{ formatDate(todo.createdAt) }}
          </p>
          <p v-if="todo.updatedAt">
            <strong>Last Update:</strong>
            {{ formatDate(todo.updatedAt) }}
          </p>
        </div>
        <v-text-field
          v-if="editMode"
          class="mb-0"
          placeholder="What do you have to do?"
          solo
          v-model="newTitle"
          @keyup.enter="editTodo"
        />
      </div>
    </v-card-title>

    <TodoActions
      v-if="!editMode && !completed" 
      :edit-btn="true"
      :edit-fn="() => { editMode = true }"
      :complete-btn="true"
      :complete-fn="toggleCompleted"
      :delete-btn="true"
      :delete-fn="deleteTodo" />

    <TodoActions
      v-if="editMode && !completed" 
      :cancel-btn="true"
      :cancel-fn="() => { editMode = true }"
      :save-btn="true"
      :save-fn="editTodo" />

    <TodoActions
      v-if="completed" 
      :undo-btn="true"
      :undo-fn="toggleCompleted"
      :delete-btn="true"
      :delete-fn="deleteTodo"/>
  </v-card>
</template>

<script>
import VueTypes from 'vue-types'
import TodoActions from '@/components/actions'
export default {
  components: {
    TodoActions
  },
  props: {
    todo: VueTypes.shape({
      id: String,
      title: String,
      completed: VueTypes.bool,
      createdAt: String,
      updatedAt: String,
    }).def(() => ({ })).isRequired,
    completed: VueTypes.bool.def(false)
  },
  watch: {
    'todo': {
      immediate: true,
      handler({ title }) {
        this.newTitle = title
      }
    }
  },
  data() {
    return {
      editMode: false,
      newTitle: ''
    }
  },
  methods: {
    formatDate(date) {
      return new Intl.DateTimeFormat("en-US", {
        dateStyle: "long",
        timeStyle: "short"
      }).format(new Date(date))
    },
    toggleCompleted() {
      this.$store.dispatch('TOGGLE_COMPLETED', this.todo.id)
    },
    editTodo() {
      this.$store.dispatch('UPDATE_TODO', { id: this.todo.id, title: this.newTitle })
      this.editMode =  false
    },
    deleteTodo() {
      this.$store.dispatch('DELETE_TODO', this.todo.id)
    }
  }
}
</script>

<style scoped lang="css">
  .todo-item p{
    display: block;
    font-size: 14px;
    color: grey;
    font-style: italic;
    margin-bottom: 0;
  }
</style>
