import React, { useState } from 'react';

const BasicForms = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [allEntry,setAllEntry] = useState([])

    const submitForm = (e) => {
        e.preventDefault()
        // const newEntry = { email:email,password:password}
        
        // Modified line
        if (email && password) {
            const newEntry = { id: new Date().getTime().toString(), email,password}

            setAllEntry([...allEntry,newEntry])
    
            setEmail("")
            setPassword("")
        }else{
            alert("please fill the data")
        }
    }
    return (
        <>
            <form action="" onSubmit={submitForm}>
                <div>
                    <label htmlFor="email">Email</label>
                    <br />
                    <input type="text" name="email" id="email" autocomplete="off"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <br />
                    <input type="password" name="password" id="password" autocomplete="off"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}

                    />
                </div>
                <br />
                <br />

                <button className="btn" type="submit">Login</button>
            </form>
            <br />
            <br />
            <br />

            <div>
                {
                    allEntry.map((curElem) => {
                        const {id,email,password} = curElem;
                         return (
                             <div className="h1Style" key={id}>
                             <p>Email :  {email}</p>
                             <p>Password : {password}</p>
                             </div>
                         )
                    })
                }
            </div>
        </>
    );
};

export default BasicForms;