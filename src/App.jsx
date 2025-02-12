import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import reactLogo from './assets/react.svg'
import { useState } from 'react'

const App = () => {

  const [todoList, setTodoList] = useState([
    {
      id: 1,
      name: "Ninh Hoang Khai"
    },
    {
      id: 2,
      name: "Vu Hoang Khang"
    }
  ]);

  const randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const addNewTodo = (todo) => {
    const newTodo = {
      id: randomIntFromInterval(1, 10),
      name: todo
    }
    setTodoList([...todoList, newTodo]);
  };

  return (
    <>
      <div className="todo--container">
        <div className="todo--title">Todo list</div>
        <TodoNew
          addNewTodo={addNewTodo}
        />
        <TodoData
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
