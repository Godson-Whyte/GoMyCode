import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement, incrementByAmount} from './counterSlice'

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch()

    const handleIncrement = (amount) => {
        dispatch(incrementByAmount(amount))
    }
  return (
    <div>
        <h1>Counter: {count}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => handleIncrement(5)}>Increase by 5</button>
    </div>
  )
}

export default Counter