export default {
    ongoingTasks: ({ todos }) => todos.filter(todo => !todo.completed),
    completedTasks: ({ todos }) => todos.filter(todo => todo.completed)
}