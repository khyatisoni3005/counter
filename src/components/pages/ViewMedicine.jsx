import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


export default function ViewMedicine() {

    let { id } = useParams()
    const [list, setList] = useState([])



    useEffect(() => {
        axios.get("http://localhost:7800/list")
            .then((result) => {
                console.log("id", id);
                console.log(result, "result view");
                const data = result.data.filter((val) => id.toString() === val._id.toString())
                console.log("data", data);
                setList(data)

            })
    }, [])

    return (
        <>
            {
                list.map((val) => {
                    return (
                        <>
                            <div className="col-5" style={{ margin: "20px" }}>
                                <h1>{val.name}</h1>
                                <p>{val.price}</p>
                                <p>{val.expiry}</p>
                                <p>{val.quantity}</p>

                            </div>
                        </>
                    )
                })
            }
        </>
    )


}
