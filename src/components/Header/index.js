import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
         <center>
         <Link to="/">
           <button>Home</button>
           </Link>
           <Link to="/login">
           <button>Login</button>
           </Link>
            <Link to="/register">
           <button>Register</button>
           </Link>
            </center>
        </div>
    )
}

export default Header
