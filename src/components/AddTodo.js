import {useContext, useRef} from 'react'
import TodosContext from '../store/todos-context'

const AddTodo = () => {
    const todosCtx = useContext(TodosContext);
    const todoInput = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredTodo = todoInput.current.value;
        if(enteredTodo.length !== 0) {
            todosCtx.addTodo(enteredTodo);
            todoInput.current.value = '';  
        }
        
    }

    return (
        <div className="flex justify-center">
            <form onSubmit={submitHandler}>
                <input ref={todoInput} type="text" placeholder="Todo..." className="py-2 px-3 bg-white bg-opacity-75 placeholder-gray-200::placeholder rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
                <button type="submit" className="py-2 px-4 bg-blue-600 text-white rounded-r-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">Add</button>
            </form>
        </div>
    )
}

export default AddTodo
