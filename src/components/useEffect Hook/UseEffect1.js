import React, { useEffect, useState } from 'react';

const UseEffect1 = () => {
    const [count,setCount] = useState(0)
    useEffect(()=>{
       document.title = `Chats (${count})`
    })
    console.log("hello outside");
    return (
        <div>
            <h1 className="h1Style">{count}</h1>
            <button className="btn" onClick={()=>setCount(count+1)}>Click</button>
        </div>
    );
};

export default UseEffect1;