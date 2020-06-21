import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import { Router, Route, Switch } from 'react-router-dom';
import Roster from './components/Roster';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faStackOverflow, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee, faHockeyPuck, faTimes } from '@fortawesome/free-solid-svg-icons';
import "animate.css/animate.min.css";
import CssBaseline from '@material-ui/core/CssBaseline';


 
library.add(fab, faCheckSquare, faCoffee, faStackOverflow, faGithub, faLinkedin, faHockeyPuck, faTimes);

function App() {
  return (
    <div className="App">
      <CssBaseline />
    </div>
  );
}

export default App;
