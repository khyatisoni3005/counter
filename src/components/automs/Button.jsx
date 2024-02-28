import React from 'react'

export default function Button(props) {
    return (
        <button onClick={props.onClick} style={{ padding: "2px 10px", textTransform: "capitalize", borderRadius: "12px", margin: "10px", backgroundColor: "white", boxShadow: "7px 0px 5px 0px black" }}>{props.content}</button>
    )
}
