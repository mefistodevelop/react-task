import React, { useState } from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Hamburger } from './components/common/Hamburger/Hamburger';
import { Terminals } from './pages/Terminals/Terminals';

function App() {
  const [isSidebarVisible, setIsVisible] = useState(false);
  const modificator = isSidebarVisible ? 'App__sidebar-wrapper_visible' : '';

  const toggleVisibility = () => {
    setIsVisible(!isSidebarVisible);
  };

  return (
    <div className="App">
      <div className={`App__sidebar-wrapper ${modificator}`}>
        <div className={`App__sidebar`}>
          <Sidebar />
        </div>
        <Hamburger toggleVisibility={toggleVisibility} />
      </div>

      <main className="App__content">
        <Switch>
          <Route path="/terminals" render={() => <Terminals />} />
          <Route exact path="/buyers/" render={() => <h1>Buyers</h1>} />
          <Route path="/buyers/:id" render={() => <h1>concrete buyer</h1>} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
