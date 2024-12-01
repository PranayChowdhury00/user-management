import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
    const {createUser} = useContext(AuthContext)
    const handelRegister =e=>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name,email,password)
        createUser(email,password)
        .then(result=>{
            console.log(result.user)
            const createdAt =result?.user?.metadata?.creationTime;
            const newUser = {name,email,createdAt}
            
            fetch('http://localhost:5000/user',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(newUser)
            })
            .then(res=> res.json())
            .then(data=>{
                console.log(data)
                if(data.insertedId){
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "user is saved in db",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })
        })
        .catch(error=>{
            console.log(error.message)
        })
    }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handelRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <p>Already have account!! <Link className="btn" to='/login'>Login</Link>Now</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
