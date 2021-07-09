import React from 'react';
import './App.css';
import Table from './Table';
import NavBar from './NavBar';
import Additem from './Additem';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';

function App() {
  return(
    <Router>
    <div className="App">
      <NavBar/>
      <div className="content">
        <Switch>
          <Route path='/'exact><Table/></Route>
          <Route path='/Additem' ><Additem/></Route>
        </Switch> 
      </div>
    </div>
    </Router>
  );
}

export default App;
