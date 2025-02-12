
const TodoData = (props) => {
    const { todoList } = props;

    return (
        <>
            <div className="todo--data">
                {todoList.map((todo, index) => {
                    return (
                        <div className="todo--item">
                            {todo.name}
                            <button className="todo__btn--del">Delete</button>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default TodoData