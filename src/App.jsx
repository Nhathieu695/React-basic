
import TodoData from "./components/todo/todo-data"
import TodoNew from "./components/todo/todo-new"
import "./components/todo/todo.css"
import reactLogo from "./assets/react.svg"
import { useState } from "react"
import "./styles/global.css"
function App() {


  const [TodoList, SetTodoList] = useState([


  ])
  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 100000), name: name
    }
    SetTodoList([...TodoList, newTodo])
  }

  const deleteItemTodo = (id) => {
    const itemDelete = TodoList.filter((item) =>
      item.id !== id
    )
    console.log("itemDelete", itemDelete)
    return SetTodoList(itemDelete)

  }
  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


  return (
    <>
      <div className="Todo-Container">
        <div className="Todo-Title">Todo List</div>
        <TodoNew
          addNewTodo={addNewTodo}

        />
        {TodoList.length > 0 ?
          <TodoData
            TodoList={TodoList}
            deleteItemTodo={deleteItemTodo}
          />

          :
          <div className="Todo-img">
            <img src={reactLogo} className="logo" />
          </div>
        }
      </div>

    </>

  )
}

export default App
