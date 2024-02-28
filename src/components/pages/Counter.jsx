import React, { useState } from 'react'
import Button from '../automs/Button'
export default function Counter() {

    const [count, setCount] = useState(0)

    function counterIncrease() {
        setCount(count + 1)
    }
    function counterdecrease() {

        if (count > 0) {
            setCount(count - 1)
        }
        return
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4">


                    </div>
                    <div className="col-4" style={{ marginTop: "70px" }}>
                        <Button content="+" onClick={counterIncrease} />
                        <h1 style={{ marginLeft: "10px", display: "inline-block" }}>{count}</h1>
                        <Button content="-" onClick={counterdecrease} />

                    </div>
                    <div className="col-4"></div>
                </div>
            </div>

        </>

    )
}
