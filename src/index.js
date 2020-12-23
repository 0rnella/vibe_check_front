import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/index.scss';
import About from './components/About';
import Methodology from './components/Methodology';
import Homepage from './components/Homepage';
import Company from './components/Company';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path='/about' component={About} />
      <Route exact path='/methodology' component={Methodology} />
      <Route exact path='/' component={Homepage}/>
      <Route path ='/company/:id' component={Company}/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
