import React from 'react';
import { useHistory, useLocation } from 'react-router';

const Index = () => {
    const location = useLocation();
    const history = useHistory()
    console.log(location);
    return (
        <div>
            <h1>Hello From {location.pathname.replace("/",'')}</h1>
            <button className="btn btn-primary" onClick={history.goBack}>Go Back</button>
        </div>
    );
};

export default Index;