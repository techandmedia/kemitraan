import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import TopNavigation from '../Navigation/TopNavigation';

// import { Link, Route } from 'react-router-dom'


export default class Home extends React.Component {
  render() {
    return (
      <div>
        <TopNavigation />
        {/* <h2> Ini Home </h2> */}
      </div>
    )
  }
}
