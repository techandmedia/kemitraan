import React from 'react';
import ReactDOM from 'react-dom';
// import styled from 'styled-components';
// import './style/GlobalStyle';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.css';

// import Homepage from './Homepage';
// import App from './Projects/Kemitraan/Main';
import App from './Projects/Kemitraan/Layout'

// const Wrapper = styled.section`
//   display: flex;
//   padding: 10px;`

ReactDOM.render(
  <div>
    <App />
  </div>, document.getElementById('root'));
registerServiceWorker();
