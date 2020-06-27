export default {
    'INIT_TODO': (state, todos) => {
        state.todos = [...todos]
    },
    'CREATE_TODO': (state, todo) => {
        state.todos.push(todo)
        const todos = JSON.stringify(state.todos)
        localStorage.setItem('todos', todos)
    },
    'UPDATE_TODO': (state, payload) => {
        const newTodos = state.todos.map(todo => {
            if (todo.id === payload.id) return payload.todo
            else return todo
        })
        state.todos = [...newTodos]
        const todos = JSON.stringify(state.todos)
        localStorage.setItem('todos', todos)
    },
    'TOGGLE_COMPLETED': (state, id) => {
        state.todos.forEach(todo => {
            if (todo.id === id) todo.completed = !todo.completed
        })
        const todos = JSON.stringify(state.todos)
        localStorage.setItem('todos', todos)
    },
    'DELETE_TODO': (state, id) => {
        const newTodos = state.todos.filter(todo => todo.id !== id)
        state.todos = [...newTodos]
        const todos = JSON.stringify(state.todos)
        localStorage.setItem('todos', todos)
    }
}