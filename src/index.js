import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

import rootReducer from './reducers';
import UserCreationContainer from './components/user-creation/UserCreationContainer';
import { addUserRoles } from './actions/user-roles.actions';

import './assets/styles/main.scss';

// mock data
import admins from './mock/admins';
import products from './mock/products';
import roles from './mock/roles';

let store = createStore(
  rootReducer,
  applyMiddleware(reduxImmutableStateInvariant())
);

store.dispatch(addUserRoles(roles));

render(
  <Provider store={store}>
    <div>
      <UserCreationContainer admins={admins} products={products} />
    </div>
  </Provider>,
  document.getElementById('app')
);
