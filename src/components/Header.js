import {useContext} from 'react'
import TodosContext from '../store/todos-context'

const Header = () => {
    const todosCtx = useContext(TodosContext);
    const totalTodos = todosCtx.todos.filter(todo => !todo.done).length;

    return (
        <header className="flex justify-between">
            <div className="pb-4 flex items-center justify-center">
                <span className="text-blue-600 font-bold text-2xl">Todo List</span>
                <span className="ml-3 h-6 w-6 flex items-center justify-center text-sm font-semibold bg-blue-600 text-white rounded-full">
                    {totalTodos}
                </span>
            </div>
        </header>
    )
}

export default Header
