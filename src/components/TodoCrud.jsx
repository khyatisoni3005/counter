import React, { useState, useEffect } from 'react'

export default function TodoCrud() {


    const [todoList, setTodoList] = useState({})
    const [todoData, setTodoData] = useState([])

    function handle(e) {
        setTodoList({ ...todoList, [e.target.name]: e.target.value })
        console.log(todoList, "todolist");
    }

    function getTodoData() {
        fetch("http://localhost:7800/list")
            .then((res) => {
                return res.json()
            })
            .then((result) => {
                setTodoData(result)

            })
    }
    function addTodoData() {
        fetch(`http://localhost:7800/create`,
            {
                method: "POST",

                headers: {
                    "content-Type": "application/json"
                },
                body: JSON.stringify(todoList)
            }
        )
            .then((res) => res.json())
            .then((result) => {
                console.log("result", result);
                getTodoData()
                setTodoList({
                    task: "",
                    description: ""
                })

            })


    }

    function deleteTodoData(id) {
        fetch(`http://localhost:7800/delete/${id}`,
            {
                method: "DELETE",

                headers: {
                    "content-Type": "application/json"
                },
                body: JSON.stringify(todoList)
            }
        )
            .then((res) => res.json())
            .then((result) => {
                getTodoData()
            })
    }

    function updateTodoList(id) {
        fetch(`http://localhost:7800/update/${id}`,
            {
                method: "PUT",

                headers: {
                    "content-Type": "application/json"
                },
                body: JSON.stringify(todoList)
            }
        )
            .then((res) => res.json())
            .then((result) => {
                console.log(result, "result");
                getTodoData()
                setTodoList({
                    task: "",
                    description: ""
                })

            })
    }

    function viewTodo(id) {
        fetch(`http://localhost:7800/view/${id}`,
        )
            .then((res) => res.json())
            .then((result) => {
                setTodoList(result)
            })
    }

    useEffect(() => {
        getTodoData()
    }, [])

    return (

        <React.Fragment>

            <input type="text" value={todoList.task} style={{ margin: "20px" }} onChange={handle} name='task' />
            <br />
            <input type="text" value={todoList.description} style={{ margin: "20px" }} onChange={handle} name='description' />
            <button onClick={() => {
                if (todoList && todoList._id) {
                    updateTodoList(todoList._id)
                } else {
                    addTodoData()
                }
            }
            }>{todoList && todoList._id ? "update" : "add"}</button>
            {
                todoData.map((val, ind) => {
                    return (
                        <React.Fragment key={ind}>

                            <h1>{val.task}</h1>
                            <p>{val.description}</p>
                            <button onClick={() => deleteTodoData(val._id)}>delete</button>
                            <button onClick={() => viewTodo(val._id)}>update</button>

                        </ React.Fragment>
                    )
                })
            }
        </React.Fragment>
    )
}
