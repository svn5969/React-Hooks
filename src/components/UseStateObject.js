import React, { useState } from 'react';

const UseStateObject = () => {
    const [myObject,setMyObject] = useState({
        myName:"shovon",
        myAge:25,
        degree:"BSC"
    })
    const changeObject =()=>{
        setMyObject({...myObject,myName:"Sourav Das"})
    }
    return (
        <div>
            <h1 className="h1Style">My Name is :{myObject.myName} & Age:{myObject.myAge} & Degree : {myObject.degree}</h1>
            <button className="btn" onClick={changeObject}>Update</button>
        </div>
    );
};

export default UseStateObject;