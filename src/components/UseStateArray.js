import React, { useState } from 'react';

const UseStateArray = () => {
    const myBioData = [
        { 
            id:0, myName:"sourav", age:25
        },{
            id:1,myName:"Shovon", age:26
        },{
            id:2,myName:"svn", age:26
        }
    ]
    const [myArray,setMyArray] = useState(myBioData)
    const clearArray =()=>{
        setMyArray([])
    }
    return (
        <>
         {
             myArray.map((bio)=> <h1 className="h1Style" key={bio.id}>Name : {bio.myName} & Age : {bio.age}</h1>)
         }  
         <button className="btn" onClick={clearArray}>Clear</button> 
        </>
    );
};

export default UseStateArray;