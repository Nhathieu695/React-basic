
const TodoData = (props) => {
    const { TodoList, deleteItemTodo } = props

    const handleClickDelete = (clicked_id) => {
        deleteItemTodo(clicked_id)
    }
    return (
        <>

            <div className="Todo-data">

                {TodoList.map((item, index) => {

                    return (
                        <div className="todo-item" key={item.id}>
                            <div>{item.name}</div>
                            <button
                                style={{ cursor: "pointer" }}
                                onClick={() => { handleClickDelete(item.id) }}
                            >delete</button>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default TodoData