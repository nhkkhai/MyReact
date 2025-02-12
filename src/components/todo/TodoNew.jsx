import { useState } from "react";

const TodoNew = (props) => {


    const { addNewTodo } = props;
    // useState Hook
    const [valueInput, setValueInput] = useState();

    const handleClick = () => {
        alert("click  " + valueInput);
    }

    const handleOnChange = (task) => {
        setValueInput(task);
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