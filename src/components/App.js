import {useContext, useEffect} from 'react'
import TodosContext from '../store/todos-context'
import Header from './Header'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import TodoItem from './TodoItem'
import DoneItem from './DoneItem'

function App() {
  let todosCtx = useContext(TodosContext);
  let todos = todosCtx.todos;

  const toggleTodos = (item) => {
    todosCtx.toggleItem(item);
    console.log("toggle: ", item);
  }  
  const deleteItem = (item) => {
    todosCtx.deleteItem(item);
    console.log("delete: ", item);
  }  

  let filteredTodos = todos.filter(todoItem => !todoItem.done);
  let filteredDones = todos.filter(todoItem => todoItem.done);
  
  let todoItems = filteredTodos.map((todoItem, index) => <TodoItem key={index} todo={todoItem} toggleTodos={toggleTodos} deleteItem={deleteItem} />)
  let doneItems = filteredDones.map((todoItem, index) => <DoneItem key={index} todo={todoItem} toggleTodos={toggleTodos} deleteItem={deleteItem} />)

  // useEffect(() => {
  //   filteredTodos = todos.filter(todoItem => !todoItem.done);
  //   filteredDones = todos.filter(todoItem => todoItem.done);
  //   todoItems = filteredTodos.map((todoItem, index) => <TodoItem key={todoItem.title} todo={todoItem} toggleTodos={toggleTodos} deleteItem={deleteItem} />)
  //   doneItems = filteredDones.map((todoItem, index) => <DoneItem key={todoItem.title} todo={todoItem} toggleTodos={toggleTodos} deleteItem={deleteItem} />)
  // }, [todos])

  return (
    <div className="pt-24 px-2 pb-10">
      <div className="container mx-auto max-w-md bg-white bg-opacity-50 p-5 rounded-3xl">
          <Header />
          <AddTodo />
          <TodoList header="Todo">
            {todoItems}
          </TodoList>
          <TodoList header="Done">
            {doneItems}
          </TodoList>
      </div>
    </div>
  );
}

export default App;
