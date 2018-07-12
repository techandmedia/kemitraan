import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from 'styled-components';
import Kemitraan from './Kemitraan/Main';

// Some folks find value in a centralized route config.
// A route config is just data. React is great at mapping
// data into components, and <Route> is a component.

const ProjectRoute = () => (
  <Wrapper>
    <Router>
      <div>
        <ul>
          <li>
            {/* bikin link nya ngga bisa root/a/c, atau root/c, harus berurutan root/a/b/c */}
            <Link to="/projects/web-development">Web Development</Link>
          </li>
          {/* <li>
            <Link to="/projects/kemitraan">Inventory Management System for Kemitraan</Link>
          </li> */}
          <li>
            <Link to="/projects/web-design">Web Design</Link>
          </li>
        </ul>
        {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
      </div>
    </Router>
  </Wrapper>
);

const webDesign = () => (
  <ChildWrapper>
    <h2>Web Design</h2>
  </ChildWrapper>);

const webDev = ({ routes }) => (
  <ChildWrapper>
    <h2>Web Development</h2>
    <ul>
      <li>
        <Link to="/projects/web-development/kemitraan">Inventory Management System for Kemitraan</Link>
      </li>
      <li>
        <Link to="/projects/web-development/cart">Cart</Link>
      </li>
    </ul>

    {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
  </ChildWrapper>
);

const Cart = () => <h3>Cart</h3>;

const routes = [
  {
    path: "/projects/web-design",
    component: webDesign
  },
  // {
  //   path: "/projects/kemitraan",
  //   component: Kemitraan
  // },
  {
    path: "/projects/web-development",
    component: webDev,
    routes: [
      {
        path: "/projects/web-development/kemitraan",
        component: Kemitraan
      },
      {
        path: "/projects/web-development/cart",
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

export default ProjectRoute;

const Wrapper = styled.section`
  display: flex;
  justify-content: flex-start;
`
const ChildWrapper = styled.section`
  align-self: start;

`