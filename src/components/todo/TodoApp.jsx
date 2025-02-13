import TodoData from './TodoData'
import TodoNew from './TodoNew'
import reactLogo from '../../assets/react.svg';
import './todo.css'
import { useState } from 'react'

const TodoApp = () => {
    const [todoList, setTodoList] = useState([]);

    const randomIntFromInterval = (min, max) => { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const addNewTodo = (todo) => {
        const newTodo = {
            id: randomIntFromInterval(1, 100000),
            name: todo
        }
        setTodoList([...todoList, newTodo]);
    };


    const deleteTodo = (idTodo) => {
        const newTodoList = todoList.filter((todo, index) => {
            return todo.id !== idTodo;
        });
        setTodoList(newTodoList);
    }

    return (
        <>
            <div className="todo--container">
                <div className="todo--title">Todo list</div>
                <TodoNew
                    addNewTodo={addNewTodo}
                />

                {todoList.length > 0 ?
                    <TodoData
                        todoList={todoList}
                        deleteTodo={deleteTodo}
                    /> :
                    <div className='todo--image'>
                        <img className='logo' src={reactLogo} alt="React Logo" />
                    </div>
                }

            </div>
        </>
    );
}

export default TodoApp