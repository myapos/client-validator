
import { createStore, compose } from 'redux';
import rootReducer from '../reducers/';

function configureStore (initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(window.devToolsExtension ? window.devToolsExtension() : f => f)
  );

  return store;
}

export default configureStore;
