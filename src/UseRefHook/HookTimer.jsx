import { useEffect, useRef, useState } from 'react';

const HookTimer = () => {
    const intervalRef = useRef()
    const [timer,setTimer] = useState(0)
    useEffect(()=>{
        intervalRef.current  = setInterval(()=>{
            setTimer(preveValue=>preveValue+1)
        },1000)
        return ()=>{
            clearInterval(intervalRef.current )
        }
    },[])
    return (
        <div>
            <h1>{timer}</h1>
            <button onClick={()=>{ clearInterval(intervalRef.current )}} >clear</button>
        </div>
    );
};

export default HookTimer;