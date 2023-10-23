import { useMemo, useState } from "react";

const UseMemoHook = () => {
    const [countOne, setCountOne] = useState(0);
    const [countTwo, setCountTwo] = useState(0);

    const incrementOne = () => {
        setCountOne(countOne + 1);
    }

    const incrementTwo = () => {
        setCountTwo(countTwo + 1);
    }

     const isEven = useMemo(() => {
        let i = 0;
         while(i<200000000)i++
         return countOne % 2 === 0;
     }, [countOne]);

    // const isEven =  () =>{
    //     let i = 0;
    //     while(i<200000000)i++
    //     return countOne%2===0
    // }

    return (
        <div>
            <button onClick={incrementOne}>IncrementOne {countOne}</button>
            <span>{isEven ? "even" : "odd"}</span>
            <button onClick={incrementTwo}>IncrementTwo {countTwo}</button>
        </div>
    );
};

export default UseMemoHook;