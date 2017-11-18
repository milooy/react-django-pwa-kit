import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import ReduxPromise from 'redux-promise';


export default function () {
  const initialState = {};
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(ReduxPromise)
    )
  );
  return store;
};