import React, {useState} from 'react';
import classes from './Counter.module.scss'
export const Counter = () => {
    const [counter, setCounter] = useState(0)
    const handleAdd = () => {
        setCounter(counter => counter + 1)
    }
    return (
        <div>
            <h1>{counter}</h1>
            <button className={classes.button} onClick={handleAdd}>add</button>
        </div>
    );
};

export default Counter;