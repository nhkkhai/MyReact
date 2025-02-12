
const TodoData = (props) => {
    const { todoList, deleteTodo } = props;

    return (
        <>
            <div className="todo--data">
                {todoList.map((todo, index) => {
                    return (
                        <div className={`todo--item`} key={todo.id}>
                            {todo.name}
                            <button onClick={(e) => { deleteTodo(todo.id) }} className="todo__btn--del">Delete</button>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default TodoData