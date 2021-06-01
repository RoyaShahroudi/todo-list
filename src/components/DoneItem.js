
const DoneItem = ({done, toggleTodos, deleteItem}) => {
    return (
        <div className="py-1 px-2 mb-1 flex items-center justify-between bg-white ">
            <div className="text-gray-600">
               {done.title} 
            </div>
            <div className="flex text-xs text-gray-500">
               <div className="hover: cursor-pointer hover:text-green-600"><span onClick={() => toggleTodos(done)} className="material-icons">add_task</span></div>
               <div className="ml-2 hover: cursor-pointer hover:text-red-600"><span onClick={() => deleteItem(done)} className="material-icons">delete</span></div>
            </div>
            
        </div>
    )
}

export default DoneItem
