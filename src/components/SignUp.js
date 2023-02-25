import React, { useState } from "react";
import { useNavigate } from "react-router-dom"

const SignUp = () => {
  const [credentials, setCredentials] = useState({name:"", email:"", password:""});
    let navigate = useNavigate();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const {name, email, password} = credentials;
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST', 
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({name, email, password})
        });
        const json = await response.json();
        console.log(json);
        //redirect
        localStorage.setItem('item', json.authtoken);
        navigate("/");
    }
    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name] : e.target.value});
    }
  return (
    <div className="mt-4">
      <form onSubmit={handleSubmit}>
            <div className="mb-3">
            <label htmlFor="name" className="form-label">
                Name
            </label>
            <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                aria-describedby="emailHelp"
                value={credentials.name}
                onChange={onChange}
            />
            </div>
            <div className="mb-3">
            <label htmlFor="email" className="form-label">
                Email address
            </label>
            <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                aria-describedby="emailHelp"
                value={credentials.email}
                onChange={onChange}
            />
            </div>
            <div className="mb-3">
            <label htmlFor="password" className="form-label">
                Password
            </label>
            <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={credentials.password}
                onChange={onChange}
                required
                minLength={5}
            />
            </div>
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    </div>
  )
}

export default SignUp