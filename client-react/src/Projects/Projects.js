import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from 'styled-components';
import Kemitraan from './Kemitraan/Main';

// Some folks find value in a centralized route config.
// A route config is just data. React is great at mapping
// data into components, and <Route> is a component.

const RouteConfigExample = () => (
  <Wrapper>
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/web-development">Web Development</Link>
          </li>
          <li>
            <Link to="/web-design">Web Design</Link>
          </li>
        </ul>
        {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
      </div>
    </Router>
  </Wrapper>
);


const webDesign = () => (
  <childWrapper>
    <h2>Web Design</h2>
  </childWrapper>);

const webDev = ({ routes }) => (
  <childWrapper>
    <h2>Web Development</h2>
    <ul>
      <li>
        <Link to="/web-development/kemitraan">Inventory Management System for Kemitraan</Link>
      </li>
      <li>
        <Link to="/web-development/cart">Cart</Link>
      </li>
    </ul>

    {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
  </childWrapper>
);

const Cart = () => <h3>Cart</h3>;

////////////////////////////////////////////////////////////
// then our route config
const routes = [
  {
    path: "/web-design",
    component: webDesign
  },
  {
    path: "/web-development",
    component: webDev,
    routes: [
      {
        path: "/web-development/kemitraan",
        component: Kemitraan
      },
      {
        path: "/web-development/cart",
        component: Cart
      }
    ]
  }
];

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => (
      // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes} />
    )}
  />
);

export default RouteConfigExample;

const Wrapper = styled.section`
  display: flex;
  justify-content: flex-start;
`
const childWrapper = styled.section`
  align-self: start;

`