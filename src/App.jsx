import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import reactLogo from './assets/react.svg'

const App = () => {

  const data = {
    name: "Anywhere",
    age: 25,
    work: "FPT"
  };

  const addNewTodo = () => {
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
        />
        <div className='todo--image'>
          <img className='logo' src={reactLogo} alt="React Logo" />
        </div>
      </div>
    </>
  )
}

export default App
