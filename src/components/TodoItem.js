
const TodoItem = ({todo, toggleTodos, deleteItem}) => {
    return (
        <div className="py-1 px-2 mb-1 flex items-center justify-between bg-white">
            <div className="">
               {todo.title} 
            </div>
            <div className="flex text-xs text-gray-500">
               <div className="hover: cursor-pointer hover:text-green-600"><span onClick={() => toggleTodos(todo)} className="material-icons">done</span></div>
               <div className="ml-2 hover: cursor-pointer hover:text-red-600"><span onClick={() => deleteItem(todo)} className="material-icons">delete</span></div>
            </div>
            
        </div>
    )
}

export default TodoItem
