import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import { Sidebar } from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <div className="App__sidebar">
        <Sidebar />
      </div>
      <div className="App__content">
        <Switch>
          <Route path="/terminals" render={() => <h1>Terminals</h1>} />
          <Route exact path="/buyers/" render={() => <h1>Buyers</h1>} />
          <Route path="/buyers/:id" render={() => <h1>concrete buyer</h1>} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
