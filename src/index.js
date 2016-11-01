import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

import rootReducer from './reducers';
import UserCreationContainer from './components/user-creation/UserCreationContainer';

import './assets/styles/main.scss';

// mock data
import admins from './mock/admins';

let store = createStore(
  rootReducer,
  applyMiddleware(reduxImmutableStateInvariant())
);

render(
  <Provider store={store}>
    <div>
      <UserCreationContainer admins={admins} />
    </div>
  </Provider>,
  document.getElementById('app')
);
