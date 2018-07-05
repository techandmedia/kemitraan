import React from 'react';
import ReactDOM from 'react-dom';
import TopNav from './Homepage';
import styled from 'styled-components';
import './style/GlobalStyle';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.css';

const Wrapper = styled.section`
  // display: flex;
  padding: 10px;`

ReactDOM.render(
  <Wrapper>
    <TopNav />
  </Wrapper>, document.getElementById('root'));
registerServiceWorker();
