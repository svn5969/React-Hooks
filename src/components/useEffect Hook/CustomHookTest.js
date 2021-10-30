import React, { useEffect, useState } from 'react';
import CustomHook from './CustomHook'
const CustomHookTest = () => {
    const [count,setCount] = useState(0)
   // custom hook 
   CustomHook(count)
    return (
        <div>
            <h1 className="h1Style">{count}</h1>
            <button className="btn btn-success" onClick={()=>setCount(count+1)}>Click</button>
        </div>
    );
};

export default CustomHookTest;