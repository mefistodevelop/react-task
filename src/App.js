import React, { useState } from 'react';
import './App.scss';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Hamburger } from './components/common/Hamburger/Hamburger';
import { Terminals } from './pages/Terminals/Terminals';
import { TerminalsState } from './state/TerminalsState';
import { Buyers } from './pages/Buyers/Buyers';
import { Buyer } from './pages/Buyer/Buyer';
import { BuyersState } from './state/BuyersState';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';

function App() {
  const [isSidebarVisible, setIsVisible] = useState(false);
  const modificator = isSidebarVisible ? 'App__sidebar-wrapper_visible' : '';

  const toggleVisibility = () => {
    setIsVisible(!isSidebarVisible);
  };

  return (
    <TerminalsState>
      <BuyersState>
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
              <Route exact path="/buyers/" render={() => <Buyers />} />
              <Route path="/buyers/:id" render={() => <Buyer />} />
              <Route path="/404" render={() => <ErrorPage />} />
              <Redirect from="*" to="/404" />
            </Switch>
          </main>
        </div>
      </BuyersState>
    </TerminalsState>
  );
}

export default App;
