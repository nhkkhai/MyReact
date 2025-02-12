import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import reactLogo from './assets/react.svg'
import { useState } from 'react'

const App = () => {

  const [todoList, setTodoList] = useState();

  const data = {
    name: "Anywhere",
    age: 25,
    work: "FPT"
  };

  const addNewTodo = (task) => {
    alert("click click");
  };

  return (
    <>
      <div className="todo--container">
        <div className="todo--title">Todo list</div>
        <TodoNew
          addNewTodo={addNewTodo}
        />
        <TodoData
          data={data}
          todoList={todoList}
        />
        <div className='todo--image'>
          <img className='logo' src={reactLogo} alt="React Logo" />
        </div>
      </div>
    </>
  )
}

export default App
