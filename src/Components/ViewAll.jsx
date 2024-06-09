import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewAll = () => {
    const [data,changedData] = useState({
        "todos":[]
    }
    )
    const fetchData = () =>{
        axios.get("https://dummyjson.com/todos").then(
            (response)=>{
                changedData(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xl-12 col-xxl-12">

                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">SLNO</th>
                                            <th scope="col">ID</th>
                                            <th scope="col">TODO</th>
                                            <th scope="col">USERID</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                      
                                      {data.todos.map(
                                        (value, index)=>{
                                            return <tr>
                                            <th scope="row">{index+1}</th>
                                            <td>{value.id}</td>
                                            <td>{value.todo}</td>
                                            <td>{value.userId}</td>
                                          </tr>
                                        }
                                      )}

                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewAll