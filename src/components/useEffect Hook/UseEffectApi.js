import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import './useEffectApi.css'
import Users from './Users';
const UseEffectApi = () => {
    const [users,setUsers] = useState([])
    const [loading,setLoading] = useState(true)
    const getUsers = async () => {
       try {
        setLoading(false)
        const response = await fetch('https://api.github.com/users')
        setUsers(await response.json());
       } catch (error) {
        setLoading(false)
           console.log(error);
       }
        

    }
    useEffect(()=>{
        getUsers();
        
    },[])
    
    if (loading) {
        return <Loading></Loading>
        
    }

    return (
        <>
          <Users users={users}></Users>
        </>
    );
};

export default UseEffectApi;