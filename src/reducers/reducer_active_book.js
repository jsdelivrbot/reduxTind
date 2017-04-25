//state argument is not application state, only the state this reducer is responsible for
export default function(state = null, action){// state is undefined in the beginning. and redux doesnt like it when its undefined, thats why need to set it to null in beginning
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state;
}
