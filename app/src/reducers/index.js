import { combineReducers } from 'redux';
import ListsReducer from './reducer_lists';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  lists: ListsReducer,
  form: formReducer
});
export default rootReducer;
