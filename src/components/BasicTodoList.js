import React, { useState } from 'react';

const BasicTodoList = () => {
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
    
    const removeElement =(id)=>{
    //   alert(id);
    const myNewArray = myArray.filter((bio)=>{
        return bio.id !== id;
    })
    setMyArray(myNewArray)
    }
    return (
        <>
         {
             myArray.map((bio)=> {
                 return (
                    <h1 className="h1Style" key={bio.id}>Name : {bio.myName} & Age : {bio.age}
                    <button className="btnInner" onClick={()=>{removeElement(bio.id)}}>remove</button>
                    </h1>
                    
                 )
             })
         }  
         <button className="btn" onClick={clearArray}>Clear</button> 
        </>
    );
};

export default BasicTodoList;