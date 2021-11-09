import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Landing from './component/Landing';
import Login from './component/Login';
import Register from './component/Register';
import InfiniteScrollPage from './todo/InfiniteScrollPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/test' component={InfiniteScrollPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
