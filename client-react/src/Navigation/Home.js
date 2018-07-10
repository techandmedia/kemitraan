import React from 'react';
import { BrowserRouter as Route, Link } from "react-router-dom";
import Projects from '../Projects/Projects';
// import styled from 'styled-components';

const Home = () => {
  return (
    <div>
      <h2>Tes H2</h2>
      <Route path="/Projects" component={Projects} />
      <Link to="/Projects">Web Projects</Link>
    </div>
  )
}

export default Home;

// const Wrapper = styled.section`
//   display: flex;
//   justify-content: space-around
//   list-style-type: none;
// `

// const Li = styled.li`
//   font-size: 14px;
// `