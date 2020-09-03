/* eslint-disable no-unused-vars */
import * as React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import Home from './views/Home';
import NotFound from './views/NotFound';
import List from './views/List';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <div className="App">
            <header className="App-header">
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                Learn React
              </a>
            </header>
          </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/list">list</Link>
            </li>
            <li>
              <Link to="/404">404</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/list" component={List} />
            <Route path="/notFound" component={NotFound} />
            <Redirect to="/notFound" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
