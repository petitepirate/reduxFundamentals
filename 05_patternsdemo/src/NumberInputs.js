import React, { useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { change } from './actions'

const NumberInputs = () => {
  const dispatch = useDispatch();
  const { num1, num2 } = useSelector(state => ({
    num1: state.nums.num1,
    num2: state.nums.num2
  }), shallowEqual)
  console.log("NUMBER INPUTS RENDER")
  const [inputs, setInputs] = useState({ num1, num2 })
  const handleChange = e => {
    const { value, name } = e.target;
    setInputs(inputs => ({ ...inputs, [name]: +value }))
  }
  const changeNum = (num) => {
    dispatch(change(num, inputs[num]))
  }

  return (
    <div>
      <div>
        <label htmlFor="num1">First Number:</label>
        <input
          type="number"
          id="num1"
          value={inputs.num1}
          name="num1"
          onChange={handleChange}
        />
        <button onClick={() => changeNum('num1')}>Update</button>
      </div>

      <div>
        <label htmlFor="num2">First Number:</label>
        <input
          type="number"
          id="num2"
          value={inputs.num2}
          name="num2"
          onChange={handleChange}
        />
        <button onClick={() => changeNum('num2')}>Update</button>
      </div>
    </div>
  )
}

export default NumberInputs;