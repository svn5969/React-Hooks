import React, { useState } from 'react';

const ShortCircuitEvaluation = () => {
    const [demo,setDemo] = useState("Sourav")
    const [age,setAge] = useState()
    return (
        <div>
        {/* && operator e data true hole Right side er value pabo  */}
        {/* || operator e data true hole left side r value pabo */}
            <h1 className="h1Style">{demo || "shovon"}</h1>

            <h1 className="h1Style">{age || "25"}</h1>
            <h1 className="h1Style">{demo && "shovon"}</h1>
            <h1 className="h1Style">{demo && 
                <>
             <h1> Sourav Shovon</h1>
            </>
            }</h1>
            <h1 className="h1Style">{age && "26"}</h1>
        </div>
    );
};

export default ShortCircuitEvaluation;