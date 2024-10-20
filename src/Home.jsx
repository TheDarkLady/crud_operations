import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const [data , setData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/users')
    .then(res => setData(res.data))
    .catch(err => console.log(err))
  }, [])
  function handleDelete(id){
    axios.delete('http://localhost:3000/users/'+ id).then(res =>{
      console.log(res.data)
      setData(data.filter(d => d.id !== id))
    }).catch(err => console.log(err))
  }
  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vw-100 vh-100 overflow-hidden'>
      <div className='w-100 d-flex flex-row justify-content-around gap-2'>
      <h1 >List of Users</h1>
      <button className='btn  btn-primary mb-2'>
        <Link to={'/create'} className='text-white text-decoration-none'>Create</Link>
        
        </button>
      </div>
      <div className='w-75 rounded bg-white border shadow p-4'>
        
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((d, i) =>(
                <tr key={i}>
                  <td>{d.id}</td>
                  <td>{d.name}</td>
                  <td>{d.email}</td>
                  <td>{d.phone}</td>
                  <td>
                    <div className='d-flex  justify-content-evenly gap-2'>
                    <Link to={`/read/${d.id}`}  className='btn btn-info'>Read</Link>
                    <Link to={`/update/${d.id}`} className='btn btn-primary'>Edit</Link>
                    <button onClick={(e)=>handleDelete(d.id)} className='btn btn-danger'>Delete</button>
                    </div>
                  </td>
                </tr>
              ))
            }
          </tbody>

        </table>
      </div>
    </div>
  )
}

export default Home
