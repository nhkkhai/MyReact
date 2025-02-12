
const TodoNew = (props) => {
    const { addNewTodo } = props;

    const handleOnChange = (task) => {
        alert("change event", task);
    }

    const handleClick = () => {
        alert("click add");
    }

    return (
        <>
            <div className="todo--new">
                <input
                    placeholder="Enter your task"
                    type="text"
                    className="todo--txt"
                    onChange={(e) => handleOnChange(e.target.value)}
                />
                <button
                    onClick={handleClick}
                    className="todo--btn"
                >Add</button>
            </div>
        </>
    )
}

export default TodoNew