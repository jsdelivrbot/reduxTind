//An action creator, just a function. it needs to connect to reducers
export function selectBook(book){
  //selectBook is an action creator, it needs to return an action,
  //an action is an object with a type property and some other info.
  return{
    type: 'BOOK_SELECTED',
    payload: book

  };
}
