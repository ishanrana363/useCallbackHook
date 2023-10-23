import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import UseCoustomHook from './UseCoustomHook';

const DocumeHook = () => {
    const [count,setCount] = useState(0)
    UseCoustomHook(count)
    return (
        <div>
            <button onClick={()=>{setCount(count+1)}} >count : {count} </button>
            <button onClick={()=>setCount(0)} >reset</button>
        </div>
    );
};

export default DocumeHook;