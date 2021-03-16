import { combineReducers } from 'redux';
import count from './count';
import nums from './nums';

const rootReducer = combineReducers({ count, nums })

export default rootReducer;

// BEFORE WE SPLIT REDUCERS UP, THIS WAS OUR ROOT REDUCER: 

// function rootReducer(state = INITIAL_STATE, action) {
//   switch (action.type) {
//     case 'CHANGE_NUM':
//       return { ...state, [action.num]: action.value }
//     case 'INCREMENT':
//       return { ...state, count: state.count + 1 }
//     case 'DECREMENT':
//       return { ...state, count: state.count - 1 }
//     case 'RESET':
//       return { ...state, count: 0 }
//     default:
//       return state;
//   }
// }


