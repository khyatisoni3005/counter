import React, { useState } from 'react';
import { Link, redirect, useNavigate } from 'react-router-dom';

export default function Login() {
    const [loginData, setLoginData] = useState({})
    const navigate = useNavigate();
    let username = "khyati"
    let password = "123"

    function handle(e) {
        setLoginData({ ...loginData, [e.target.name]: e.target.value })
    }
    return (

        <>
            <div className="col-4">
                <input type="text" placeholder='name' name='name' onChange={handle} />
                <br /><br />
                <input type="text" placeholder='password' name='password' onChange={handle} />
                <br /><br />
                <button onClick={() => {
                    if (loginData.name === username && loginData.password === password) {
                        // console.log("success");
                        navigate("/Medicine")
                    } else {
                        alert("Enter Currect Username And Psaaword")
                    }
                }} > login</button>

                <button onClick={() => {
                    if (!loginData.name || !loginData.password) {
                        alert("fill the details")
                    } else {
                        alert("sign up successfully")
                        navigate("/Medicine")
                    }
                }}>sign up</button>

            </div >
        </>


    )
}
