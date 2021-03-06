import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeView from './View/HomeView';
import DetailsPageView from './View/DetailsPageView';
import CardOrderView from './View/CartOrderView';
import Navigation from './features/Navigation/Navigation';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <HomeView />
        </Route>
        <Route path="/:cardId">
          <DetailsPageView />
        </Route>
        <Route path="/order">
          <CardOrderView />
        </Route>
        <Route>
          <HomeView />
        </Route>
      </Switch>
    </>
    //     <div className="App">
    //       <header className="App-header">
    //         <img src={logo} className="App-logo" alt="logo" />
    //         <Counter />
    //         <p>
    //           Edit <code>src/App.js</code> and save to reload.
    //         </p>
    //         <span>
    //           <span>Learn </span>
    //           <a
    //             className="App-link"
    //             href="https://reactjs.org/"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             React
    //           </a>
    //           <span>, </span>
    //           <a
    //             className="App-link"
    //             href="https://redux.js.org/"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             Redux
    //           </a>
    //           <span>, </span>
    //           <a
    //             className="App-link"
    //             href="https://redux-toolkit.js.org/"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             Redux Toolkit
    //           </a>
    //           ,<span> and </span>
    //           <a
    //             className="App-link"
    //             href="https://react-redux.js.org/"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             React Redux
    //           </a>
    //         </span>
    //       </header>
    //     </div>
  );
}

export default App;
