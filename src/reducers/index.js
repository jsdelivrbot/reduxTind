import { combineReducers } from 'redux';
import BookReducer from './reducer_books';
import TestReducer from './reducer_test';
import ActiveBookReducer from './reducer_active_book';
const rootReducer = combineReducers({
  //the reducer adds a key to our global application state. which is books and testing here.
  books: BookReducer,
  testing: TestReducer,
  activeBook: ActiveBookReducer,

});

export default rootReducer;
