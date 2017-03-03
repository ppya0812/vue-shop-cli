// store的计算属性   暂时没发现有什么必要性
export default {
    filterList: state => {
        return state.todoList.filter(todo => todo.done)
    }
}
