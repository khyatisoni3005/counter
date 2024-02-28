import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


export default function ViewTodo() {

    let { id } = useParams()
    const [list, setList] = useState([])



    useEffect(() => {
        fetch("http://localhost:7800/list")
            .then((res) => res.json())
            .then((result) => {
                console.log("id", id);
                const data = result.filter((val) => id.toString() === val._id.toString())
                console.log("data", data);

                setList(data)
                // console.log(datas[0].task, "datas");

            })
    }, [])

    return (
        <>
            {
                list.map((val) => {
                    return (
                        <>
                            <div className="col-5" style={{ margin: "20px" }}>
                                <h1>{val.task}</h1>
                                <p>{val.description}</p>
                            </div>
                        </>
                    )
                })
            }
        </>
    )


}
