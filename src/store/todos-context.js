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
        const duplicated = todos.find(todo => todo.title === title);
        !duplicated && settodos(prevTodos => {
            return prevTodos.concat({
                title: title,
                done: false
            });
        });
    }

    function toggleItemHandler(item) {
        const updatedTodos = todos.map(todo => todo.title === item.title ? {...todo, done: !todo.done} : todo);
        settodos(updatedTodos);       
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