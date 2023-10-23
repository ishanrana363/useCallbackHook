import Title from "./Title";
import Count from "./Count";
import Button from "./Button"
import { useState } from "react";

const ParentComponent = () => {
    const [age,setAge] = useState(25);
    const [salary,setSalary] = useState(50000);
    const  incrementAge = ()=>{
        setAge(age+1)
    }
    const incrementSalary = () =>{
        setSalary(salary+1)
    }
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