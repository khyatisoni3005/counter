import React, { useState, useEffect } from 'react'
import Button from '../automs/Button';
import { BrowserRouter, Link } from 'react-router-dom';

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
            {/* 
            <input type="text" value={todoList.task} style={{ margin: "20px" }} onChange={handle} name='task' />
            <br />
            <input type="text" value={todoList.description} style={{ margin: "20px" }} onChange={handle} name='description' />
            <Button onClick={() => {
                if (todoList && todoList._id) {
                    updateTodoList(todoList._id)
                } else {
                    addTodoData()
                }
            }
            } content={todoList && todoList._id ? " update" : "add"} /> */}


            <div className="container">
                <div className="row">
                    <div className="col-4">

                    </div>
                    <div className="col-4">
                        <input type="text" placeholder='enter product name' value={todoList.task} style={{ margin: "20px" }} onChange={handle} name='task' />
                        <br />
                        <input type="text" placeholder='enter description' value={todoList.description} style={{ margin: "20px" }} onChange={handle} name='description' />
                        <br />
                        <Button onClick={() => {
                            if (todoList && todoList._id) {
                                updateTodoList(todoList._id)
                            } else {
                                addTodoData()
                            }
                        }
                        } content={todoList && todoList._id ? " update" : "add"} />
                    </div>
                    <div className="col-4"></div>
                </div>
            </div>


            {
                todoData.map((val, ind) => {
                    return (
                        <React.Fragment key={ind}>



                            {/* <span>{ind}.</span><h1 style={{ display: "inline-block" }}>{val.task}</h1>
                                        <p>{val.description}</p>
                                        <Button onClick={() => deleteTodoData(val._id)} content="delete" />
                                        <Button onClick={() => viewTodo(val._id)} content="update" /> */}


                            <div className="col-2" style={{ display: "inline-block", margin: "0px 20px" }}>
                                <div className="container">

                                    <div className="row">
                                        <span>{ind}.</span><h1 style={{ display: "inline-block" }}>{val.task}</h1>
                                        <p>{val.description}</p>
                                        <Button onClick={() => deleteTodoData(val._id)} content="delete" />
                                        <Button onClick={() => viewTodo(val._id)} content="update" />
                                        <Link to={`/view-todo/${val._id}`} style={{ textDecoration: "none", textAlign: "center", color: "black", }}>View</Link>
                                    </div>
                                </div>
                            </div>


                        </ React.Fragment>
                    )
                })
            }
        </React.Fragment >
    )
}
