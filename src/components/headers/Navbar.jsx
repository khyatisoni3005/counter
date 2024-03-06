import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active" aria-current="page" >home</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/counter" className="nav-link active" aria-current="page" >Counter</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link active" aria-current="page" >contact us</Link>
                        </li>

                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="sear ch" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}
