
const TodoList = (props) => {
    return (
        <div>
            <div className="pb-1 pt-6 border-b text-blue-600 font-bold text-lg">
                {props.header}
            </div>
            {props.children.length === 0 ? '' : props.children}
        </div>
    )
}

export default TodoList
