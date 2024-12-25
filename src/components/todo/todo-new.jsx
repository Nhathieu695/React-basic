import { useState } from "react"


const TodoNew = (props) => {

    const [valueInput, setValueInput] = useState("")
    const { addNewTodo } = props
    // addNewTodo(name)
    const handleClick = () => {
        addNewTodo(valueInput)
        setValueInput("")
    }
    const handleOnChange = (name) => {
        setValueInput(name)
    }
    return (
        <>
            <div className="Todo-new">

                <input type="text"
                    onChange={(event) => handleOnChange(event.target.value)}
                    value={valueInput}
                />
                <button
                    style={{ cursor: "pointer" }}
                    onClick={handleClick}>Add</button>

            </div>
        </>
    )
}
export default TodoNew
