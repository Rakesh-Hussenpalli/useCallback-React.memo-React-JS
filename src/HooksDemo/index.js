import React, { useState, useCallback } from 'react';
import './index.css';
import Title from '../Title'
import Count from '../Count'
import Button from '../Button'


const HooksDemo = () => {

    const [age, setAge] = useState(0)
    const [salary, setSalary] = useState(1000)

    const incrementAge = useCallback(() => {
        setAge(age + 1)
    }, [age])
    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000)
    }, [salary])
    return (
        <>
            <center>
                <Title />
                <Count text={"Age"} number={age} />
                <Button clickHandler={incrementAge}>Increment Age</Button>
                <Count text={"Salary"} number={salary} />
                <Button clickHandler={incrementSalary}>Increment Salary</Button>
            </center>
        </>
    )

}

export default HooksDemo