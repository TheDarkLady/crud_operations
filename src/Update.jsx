import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
function Update() {
  // const [data, setData] = useState([])
  const {id} = useParams()
  const [values, setValues] = useState({
    name:'',
    email:'',
    phone:'',
  })
  useEffect(() => {
    axios.get('http://localhost:3000/users/'+ id).then((res)=>{
      setValues(res.data)
      
    }).catch((err)=>{
      console.log(err);
      
    })
  }, [])
  const navigate = useNavigate()
  function handleUpdate(e) {
    e.preventDefault();
    axios.put('http://localhost:3000/users/'+ id, values).then(res =>{
      console.log(res.data);
      navigate('/');
    }).catch((err)=>{
      console.log(err);
      
    })
  }
  return (
    <div className="vw-100 d-flex  bg-white justify-content-center align-items-center bg-light">
      <div className="w-75 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1>Update User</h1>
        <form onSubmit={handleUpdate}>
          <div className="mb-2 d-flex flex-column justify-content-start">
            <label htmlFor="name" className="text-start">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter Name"
              value={values.name}
              onChange={(e)=> setValues({...values, name:e.target.value})}
            />
          </div>
          <div className="mb-2 d-flex flex-column justify-content-start">
            <label htmlFor="email" className="text-start">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter Email"
              value={values.email}
              onChange={(e)=> setValues({...values, email:e.target.value})}
            />
          </div>
          <div className="mb-2 d-flex flex-column justify-content-start">
            <label htmlFor="tel" className="text-start">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              className="form-control"
              placeholder="Enter Phone"
              value={values.phone}
              onChange={(e)=> setValues({...values, phone:e.target.value})}
            />
          </div>
          <button  className="btn btn-success">Update</button>
          <Link to={"/"} className="btn btn-primary ms-2">
            Back
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Update
