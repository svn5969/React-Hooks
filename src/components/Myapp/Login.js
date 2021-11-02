import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';
const Login = () => {
    const diffTostify =()=>{
        toast.success('login successfully',{
            position:"top-center"
        })
    }
    return (
        <>
           <div className="main-div">
               <h2>Welcome to SignIn Page</h2>
               <button className="btn btn-primary" onClick={diffTostify}>Login</button>
               <ToastContainer />
           </div> 
        </>
    );
};

export default Login;