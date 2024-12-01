import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const Login = () => {
    const {signInWithUser}=useContext(AuthContext);
    const handelLogin = e=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password)
        signInWithUser(email,password)
        .then(result=>{
          console.log(result)
          //update time
          const lastSignInTime = result?.user?.metadata?.lastSignInTime;
          const loginInfo = {email,lastSignInTime};

          fetch(`http://localhost:5000/user`,{
            method:"PATCH",
            headers:{
              "content-type":'application/json'
            },
            body:JSON.stringify(loginInfo)
          })
          .then(res=> res.json())
          .then(data=>{
            console.log(data)
          })
        })
        .catch(error=>{
          console.log(error)
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handelLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p>Don't have account? <Link className='btn' to='/register'>Register</Link>Now</p>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;