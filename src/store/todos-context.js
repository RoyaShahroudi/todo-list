import {createContext, useState} from 'react'

const TodosContext = createContext({
    todos: [],
    totalTodos: 0,
    doneList: [],
    addTodo: (title) =>  {},
    toggleItem: (item) => {},
    deleteItem: (item) => {}
});

export function TodosContextProvider(props) {
    const [todos, settodos] = useState([]);
    const [doneList, setdoneList] = useState([]);

    function addTodoHandler(title) {
        settodos(prevTodos => {
            return prevTodos.concat({
                title: title,
                done: false
            });
        });
    }

    function toggleItemHandler(item) {
        if(item.done) {
            settodos(prevTodos => {
                return prevTodos.concat({
                    title: item.title,
                    done: false
                });
            });
            const updatedDoneList = doneList.filter(doneItem => doneItem.title !== item.title);
            setdoneList(updatedDoneList);
        } else {
            setdoneList(prevTodos => {
                return prevTodos.concat({
                    title: item.title,
                    done: true
                });
            });
            const updatedTodos = todos.filter(todo => todo.title !== item.title);
            settodos(updatedTodos);
        }
        
    }

    function deleteItemHandler(item) {
        if(item.done) {
          
            const updatedDoneList = doneList.filter(doneItem => doneItem.title !== item.title);
            setdoneList(updatedDoneList);
        } else {
            
            const updatedTodos = todos.filter(todo => todo.title !== item.title);
            settodos(updatedTodos);
        }
    }

    const context = {
        todos: todos,
        totalTodos: todos.length,
        doneList: doneList,
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