import React from 'react';
import { useHistory, useLocation } from 'react-router';
const About = () => {
    const location = useLocation();
    const history = useHistory()
    console.log(history)
    return (
        <div>
            <h1>Hello From {location.pathname.replace("/",'')}</h1>
            {
                location.pathname === '/about/shovon' ? <p>Hii, Shovon Good to see you again</p> :  <p>Login to see Your files</p>
            }

            <button className="btn btn-success" onCLick={()=>history.push("/index")}>Home Page</button>
            
           
        </div>
    );
};

export default About;