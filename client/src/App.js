import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
// containers
import Login from './containers/Login';
import Landing from './containers/Landing';
//redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
      <Provider store={store}>
        <Router>
          <Route exact path="/" component={Login} />
          <Route exact path="/landing" component={Landing} />
        </Router>
      </Provider>
  );
}

export default App;
