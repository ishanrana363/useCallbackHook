import Title from "./Title";
import Count from "./Count";
import Button from "./Button"
import { useCallback, useState } from "react";

const ParentComponent = () => {
    
    const [age,setAge] = useState(25);
    const [salary,setSalary] = useState(50000);
    const  incrementAge = useCallback(()=>{
        setAge(age+1)
    },[age])
    const incrementSalary = useCallback(()=>{
        setSalary(salary+1000)
    },[salary])
    return (
        <div>
            <Title/>
            <Count text = "age" count = {age} />
            <Button handleClick = {incrementAge} >IncrementAge</Button>
            <Count text= "salary" count={salary} />
            <Button handleClick = {incrementSalary} >IncrementSalary</Button>
        </div>
    );
};

export default ParentComponent;