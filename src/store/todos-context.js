import {createContext, useState} from 'react'

const TodosContext = createContext({
    todos: [],
    addTodo: (title) =>  {},
    toggleItem: (item) => {},
    deleteItem: (item) => {}
});

export function TodosContextProvider(props) {
    const [todos, settodos] = useState([]);

    function addTodoHandler(title) {
        settodos(prevTodos => {
            return prevTodos.concat({
                title: title,
                done: false
            });
        });
    }

    function toggleItemHandler(item) {
        settodos(prevTodos => {
            return prevTodos.concat({
                title: item.title,
                done: !item.done
            });
        });        
    }

    function deleteItemHandler(item) {
        const updatedTodos = todos.filter(todo => todo.title !== item.title);
        settodos(updatedTodos);
    }

    const context = {
        todos: todos,
        addTodo: addTodoHandler,
        toggleItem: toggleItemHandler,
        deleteItem: deleteItemHandler

    }
    return (
        <TodosContext.Provider value={context}>
            {props.children}
        </TodosContext.Provider>
    )
}

export default TodosContext;