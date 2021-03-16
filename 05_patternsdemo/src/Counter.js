import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions'

const SecondCounter = () => {
  const dispatch = useDispatch();
  const count = useSelector(store => store.count);
  console.log(count);
  const up = () => dispatch(increment())
  const down = () => dispatch(decrement())
  return (
    <div>
      <h1>Count is:  {count}</h1>
      <button onClick={up}>+</button>
      <button onClick={down}>-</button>
    </div>
  )
}

export default SecondCounter;