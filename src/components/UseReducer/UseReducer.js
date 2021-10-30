import React, { useReducer, useState } from 'react';
const initialState =0;
const reducer =(state,action)=>{
    // console.log(state,action);
    if (action.type === "INCREMENT") {
        return state +1;
    }else{
        return state -1;
    }
}

const UseReducer = () => {
    // const  [count,setCount] = useState(0)
    const [state,dispatch] = useReducer(reducer,initialState)
    return (
        <>
            <div>
                <p>{state}</p>
                <button onClick={()=>dispatch({type: "INCREMENT"})} > Increment</button>
                <button onClick={()=>dispatch({type: "DECREMENT"})} > Decrement</button>
            </div>
        </>
    );
};

export default UseReducer;


// const UseReducer = () => {
//     const  [count,setCount] = useState(0)
//     return (
//         <>
//             <div>
//                 <p>{count}</p>
//                 <button onClick={()=>setCount(count+1)} > Increment</button>
//                 <button onClick={()=>setCount(count-1)} > Decrement</button>
//             </div>
//         </>
//     );
// };

// export default UseReducer;