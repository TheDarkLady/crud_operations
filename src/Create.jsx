import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Create() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    axios.post("http://localhost:3000/users", values).then((res)=>{
      console.log(res.data);
      navigate("/");
    });
  }
  return (
    <div className="vw-100 d-flex  bg-white justify-content-center align-items-center bg-light">
      <div className="w-75 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h1>Add User</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-2 d-flex flex-column justify-content-start">
            <label htmlFor="name" className="text-start">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter Name"
              onChange={(e) => setValues({ ...values, name: e.target.value })}
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
              onChange={(e) => setValues({ ...values, email: e.target.value })}
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
              onChange={(e) => setValues({ ...values, phone: e.target.value })}
            />
          </div>
          <button className="btn btn-success">Submit</button>
          <Link to={"/"} className="btn btn-primary ms-2">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Create;
