import React, { useState } from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Hamburger } from './components/common/Hamburger/Hamburger';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const modificator = isVisible ? 'App__sidebar-wrapper_visible' : '';

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="App">

      <div className={`App__sidebar-wrapper ${modificator}`}>
        <div className={`App__sidebar`}>
          <Sidebar />
        </div>
        <Hamburger toggleVisibility={toggleVisibility} />
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
