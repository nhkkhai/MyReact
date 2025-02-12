
const TodoNew = (props) => {
    const { addNewTodo } = props;

    console.log(addNewTodo)
    return (
        <>
            <div className="todo--new">
                <input placeholder="Enter your task" type="text" className="todo--txt" />
                <button className="todo--btn">Add</button>
            </div>
        </>
    )
}

export default TodoNew