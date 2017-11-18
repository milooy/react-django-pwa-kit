import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import ReduxPromise from 'redux-promise';


export default function () {

  const initialState = {};
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(ReduxPromise),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  if ( module.hot ) {
    module.hot.accept( '../reducers', () => {
        const nextRootReducer = require( '../reducers' );
        store.replaceReducer( nextRootReducer );
      }
    );
  }
  return store;
};