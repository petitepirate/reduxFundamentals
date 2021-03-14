const INITIAL_STATE = { face: 'ʘ‿ʘ'};
const store = Redux.createStore(rootReducer);
const faceDiv = document.querySelector('#face_space');
const faceBtns = document.querySelector('#face_buttons');

function rootReducer(state=INITIAL_STATE, action) {
  switch (action.type) {
    case 'SHRUG':
      return {...state, face: '¯\\_(ツ)_/¯'};
    case 'CHICKEN_DANCE':
      return {...state, face: '~(˘▾˘~)'};
    case 'YODA':
      return {...state, face: 'ᕙ(⇀‸↼‶)ᕗ'};
    case 'GUN_SHOW':
      return {...state, face: ' ᕦ(ò_óˇ)ᕤ'};
    default:
      return state;
  }
}

faceDiv.textContent = store.getState().face;

faceBtns.addEventListener('click', (e) => {
  store.dispatch({ type: e.target.id.toUpperCase() });
  const currentFace = store.getState().face;
  faceDiv.textContent = currentFace;
})
