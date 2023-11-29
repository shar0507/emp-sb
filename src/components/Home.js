import React, { useState } from 'react'
import { useEffect } from 'react'
import "./Home.css"
import axios from 'axios'
import { useParams } from 'react-router-dom';

export default function Home(){

    const[emp, setEmp]=useState([]);

    const {id}=useParams();

    useEffect(()=>{
        loadEmp();        
    },[]);

    const loadEmp=async()=>{
        const result=await axios.get("http://localhost:8080/list")
        setEmp(result.data)
    };

    const deleteEmp=async(id)=>{
        await axios.delete(`http://localhost:8080/employee/${id}`)
        loadEmp();
    }


    return(
        <div className='container'>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th scope='col'>id</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Email</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            emp.map((each, index)=>(
                         <tr>
                            <th scope='row' key={index}>{index+1}</th>
                            <td>{each.name}</td>
                            <td>{each.email}</td>
                            <td><button>View</button></td>
                            <td><button onClick={()=>deleteEmp(each.id)}>Delete</button></td>
                            
                         </tr>

                          ))

                        }
                       
                    </tbody>
                </table>
            </div>

        </div>
    );

}