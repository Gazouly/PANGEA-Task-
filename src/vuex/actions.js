export default {
    'INIT_TODO': ({ commit }) => {
        const localTodos = JSON.parse(localStorage.getItem('todos'))
        if (localTodos) commit('INIT_TODO', localTodos)
    },
    'CREATE_TODO': ({ commit }, todoData) => {
        const todo = {
            ...todoData,
            id: new Date().toISOString(),
            createdAt: new Date().toISOString(),
            updatedAt: ""
        }
        commit('CREATE_TODO', todo)
    },
    'UPDATE_TODO': ({ commit, state }, payload) => {
        let todo = state.todos.filter(todo => todo.id === payload.id)
        let editedTodo = {
            ...todo[0]
        }
        editedTodo.title = payload.title
        editedTodo.updatedAt = new Date().toISOString()
        commit('UPDATE_TODO', {
            id: payload.id,
            todo: editedTodo
        })
    },
    'TOGGLE_COMPLETED': ({ commit }, id) => {
        commit('TOGGLE_COMPLETED', id)
    },

    'DELETE_TODO': ({ commit }, id) => {
        commit('DELETE_TODO', id)
    }
}