import React, { useRef, useState } from 'react';

const Uncontrolled = () => {
    // it like a useState only and its preserve the value. No rerender
    const luckyName = useRef(null);
    const [show,setShow] = useState(false)
    const submitForm =(e)=>{
        e.preventDefault();
        const name = luckyName.current.value;
        name === "" ? alert("Please fill the data") : setShow(true)
    }
    return (
        <div>
            <form action="" onSubmit={submitForm}>
                <label htmlFor="luckyName">enter your luckyName</label>
                <br />
                <br />
                <input type="text" ref={luckyName} />
               
                <br />
                <br />
                <button>Submit</button>
            </form>
            
            <p>{show ? `Your lucky name is ${luckyName.current.value}`: ""} </p>
        </div>
    );
};

export default Uncontrolled;