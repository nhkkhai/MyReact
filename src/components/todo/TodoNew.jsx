import { useState } from "react";

const TodoNew = (props) => {
    const { addNewTodo } = props;
    // useState Hook
    const [valueInput, setValueInput] = useState();

    const handleClick = () => {
        if (valueInput !== undefined && valueInput !== "") {
            addNewTodo(valueInput);
            setValueInput("");
        } else {
            alert("Vui long nhap thong tin");
        }
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
                    value={valueInput !== undefined ? valueInput : ""}
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