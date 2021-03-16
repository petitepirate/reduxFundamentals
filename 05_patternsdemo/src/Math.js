import React from 'react';
import { useSelector, shallowEqual } from 'react-redux'

const Math = () => {
  // const { num1, num2 } = useSelector(state => ({
  //   num1: state.num1,
  //   num2: state.num2
  // }))
  // const num1 = useSelector(state => state.num1)
  // const num2 = useSelector(state => state.num2)

  const { num1, num2 } = useSelector(state => ({
    num1: state.nums.num1,
    num2: state.nums.num2
  }), shallowEqual)
  console.log(`MATH COMPONENT RENDERING! num1: ${num1}, num2: ${num2}`)
  return (
    <div>
      <h3>Math Facts!</h3>
      <ul>
        <li>Sum: {num1 + num2}</li>
        <li>Difference: {num1 - num2}</li>
        <li>Product:  {num1 * num2}</li>
        <li>Quotient: {num1 / num2} </li>
      </ul>
    </div>
  )
}

export default Math;