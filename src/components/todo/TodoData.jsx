
const TodoData = (props) => {
    const { name, age, work } = props.data;

    return (
        <>
            <div className="todo--data">
                <div className="todo--item">My name is {name}</div>
                <div className="todo--item">JavaScript</div>
            </div>
        </>
    )
}

export default TodoData