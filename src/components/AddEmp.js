import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddEmp() {

    let navigate=useNavigate()

    const[emp, setEmp]=useState({name:"", email:""})

    const{name,email}=emp;

    const onInputChange =(e)=>{
        setEmp({...emp,[e.target.name]:e.target.value});
    }

    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/employee", emp)
        navigate("/")

    }



    return (
        <div>
            <h4>Register new Employee</h4>
            <form onSubmit={(e)=>onSubmit(e)}>
                <div>
                    <label for="name">Name: </label>
                    <input type='text' id='name' name='name' value={name} onChange={(e)=>onInputChange(e)}></input>
                </div>
                <div>
                    <label for="email">Email: </label>
                    <input type='email' id='email' name='email' value={email} onChange={(e)=>onInputChange(e)}></input>
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>

        </div>
    );
}