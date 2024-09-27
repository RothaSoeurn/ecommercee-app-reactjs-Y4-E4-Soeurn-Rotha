import React, { useState } from 'react'
import { decrement, increment, incrementByAmount, reset } from './../redux/counterSlice';
import { useAppSelector, useAppDispatch } from '../../hooks';
export default function Counter() {
    const counter = useAppSelector((state) => state.countes.value);
    const dispatch = useAppDispatch();
    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(reset())}>reset</button>
            {/* <button onClick={() => dispatch(incrementByAmount(counter, ))}>incrementByAmount</button> */}
        </div>
    )
}
