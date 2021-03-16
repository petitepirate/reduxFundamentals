
const INITIAL_STATE = { todoList: [] };

export default function rootReducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_TODO':
      return { ...state, todoList: [...state.todoList, payload] };

    case 'DELETE_TODO':
      const newTodoArr = [...state.todoList];
      newTodoArr.splice(payload, 1);
      return { ...state, todoList: [...newTodoArr] };

    default:
      return state;
  }
}
