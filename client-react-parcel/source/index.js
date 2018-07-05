import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
// import Home from './Content/Home';
import TopNavigation from './Navigation/TopNavigation'
import registerServiceWorker from '../registerServiceWorker';

ReactDOM.render(
  <TopNavigation />,
  // <BrowserRouter>
  //   <Home />
  // </BrowserRouter>, 
  document.getElementById('root'));
registerServiceWorker();
