import {useContext} from 'react'
import TodosContext from '../store/todos-context'
import Header from './Header'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import TodoItem from './TodoItem'
import DoneItem from './DoneItem'

function App() {
  const todosCtx = useContext(TodosContext);
  const todos = todosCtx.todos;

  const toggleTodos = (item) => {
    todosCtx.toggleItem(item);
  }  
  const deleteItem = (item) => {
    todosCtx.deleteItem(item);
  }  

  const filteredTodos = todos.filter(todoItem => !todoItem.done);
  const filteredDones = todos.filter(todoItem => todoItem.done);
  
  const todoItems = filteredTodos.map((todoItem, index) => <TodoItem key={index} todo={todoItem} toggleTodos={toggleTodos} deleteItem={deleteItem} />)
  const doneItems = filteredDones.map((doneItem, index) => <DoneItem key={index} done={doneItem} toggleTodos={toggleTodos} deleteItem={deleteItem} />)

  return (
    <div className="pt-24 px-2 pb-10">
      <div className="container mx-auto max-w-md bg-white bg-opacity-50 p-5 rounded-3xl">
          <Header />
          <AddTodo />
          <TodoList title="Todo">
            {todoItems}
          </TodoList>
          <TodoList title="Done">
            {doneItems}
          </TodoList>
      </div>
    </div>
  );
}

export default App;
