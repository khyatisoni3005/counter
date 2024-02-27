import React, { useState } from 'react'
import Button from './automs/Button'
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

            <Button content="+" onClick={counterIncrease} />
            <h1 style={{ marginLeft: "10px", display: "inline-block" }}>{count}</h1>
            <Button content="-" onClick={counterdecrease} />

        </>

    )
}
