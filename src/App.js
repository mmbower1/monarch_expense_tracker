import React from 'react';
import './App.css';
// containers
import Landing from './containers/Landing';
//redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Landing />
    </Provider>
  );
}

export default App;
