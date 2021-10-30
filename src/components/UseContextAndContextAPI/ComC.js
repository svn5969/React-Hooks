import React, { useContext } from 'react';
import {BioData} from './ComA'
const ComC = () => {
    const MyName = useContext(BioData)
    return (
        <div>
            <h1>Hello From {MyName} & Com C</h1>
        </div>
    );
};

export default ComC;