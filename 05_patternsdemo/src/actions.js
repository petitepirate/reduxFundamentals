import { INCREMENT, DECREMENT, CHANGE_NUM } from './actionTypes';

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT })

export const change = (num, value) => ({
  type: CHANGE_NUM,
  num,
  value
})