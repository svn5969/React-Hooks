import React, { useEffect, useState } from 'react';
import './useEffectApi.css'
const UseEffectApi = () => {
    const [users,setUsers] = useState([])
    const getUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
        setUsers(await response.json());
        

    }
    useEffect(()=>{
        getUsers();
    },[])
    return (
        <>
          <h2>List of GitHub Users</h2>
          <div className="container-fluid mt-5">
        <div className="row text-center">
        {
            users.map((curElem)=>{
             return (
                
                 <div className="col-10 col-md-6 mt-5" key={curElem.id}>
             <div className="card p-2">
              <div className="d-flex align-items-center">
                  <div className="image">
                  <img src={curElem.thumbnailUrl} alt="" className="rounded" width="155" />
                  </div>
                  <div className="ml-3 w-100">
                      <h4 className="mb-0 mt-0 textLeft">{curElem.title}</h4> <span className="textLeft"></span>
                      <div className="justify-content-between p-2 mt-2 bg-primary d-flex text-white stats">
                          <div className="d-flex flex-column"> <span className="articles">Articles</span> <span className="number1">38</span> </div>
                          <div className="d-flex flex-column"> <span className="followers">Followers</span>  <span className="number2">980</span></div>
                          <div className="d-flex flex-column"> <span className="rating">Rating</span> <span className="number3">9.8</span> </div>
                          
                      </div>
                  </div>
              </div>
             </div>
           </div>
                
             )
            })
        }
          
        </div>
          </div>
        </>
    );
};

export default UseEffectApi;