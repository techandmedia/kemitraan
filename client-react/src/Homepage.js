import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import styled from 'styled-components';
import Header from './Navigation/Header';
// import Home from './Navigation/Home';
// import About from './Navigation/About';
// import Projects from './Projects/Projects';

const Homepage = () => (
  <div>
    {/* yang ada di dalam sini sudah pasti dirender */}
    <Header />
    {/* <Sidebar /> */}
    {/* <Content /> */}
    {/* <Footer /> */}
  </div>
);

// const TestHome = () => <Home />;

// const Topics = ({ match }) => (
//   <div>
//     <h2>Topics</h2>
//     <ul>
//       <li>
//         <Link to={`${match.url}/rendering`}>Rendering with React</Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/components`}>Components</Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
//       </li>
//     </ul>

//     <Switch>
//       <Route path={`${match.url}/:topicId`} component={Topic} />
//       <Route
//         exact
//         path={match.url}
//         render={() => <h3>Please select a topic.</h3>}
//       />
//     </Switch>
//   </div>
// );

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default Homepage;


const Ul = styled.ul`
  display: flex;
  justify-content: space-around
  list-style-type: none;
`

const Li = styled.li`
  font-size: 14px;
`