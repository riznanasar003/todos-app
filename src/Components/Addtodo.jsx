import React, { useState } from 'react'
import NavBar from './NavBar'

const Addtodo = () => {
    const [data,setData] = useState(
        {
            "name":"",
            "emailid":"",
            "phno":"",
            "dob":""
        }
    )
    const inputHandler = (event) =>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue = ()=>{
        console.log(data)
    }
  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <label htmlFor="" className="form-label">Name</label>
                        <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <label htmlFor="" className="form-label">Email id</label>
                        <input type="text" className="form-control" name='emailid' value={data.emailid} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <label htmlFor="" className="form-label">Phone no</label>
                        <input type="text" className="form-control" name='phno'value={data.phno} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        
                        <label htmlFor="" className="form-label">Date Of Birth</label>
                        <input type="date" name="dob" value={data.dob} onChange={inputHandler} id="" className="form-control" />

                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        
                        <button className="btn btn-success" onClick={readValue}>Register</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Addtodo