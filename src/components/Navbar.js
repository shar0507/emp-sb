import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';

export default function Navbar(){
    return(
        <div>
            <nav>
                <a href="">Employee Management</a>
                <Link className="addUser" to="/addemp">Add Employee</Link>
            </nav>

        </div>
    );
    
}