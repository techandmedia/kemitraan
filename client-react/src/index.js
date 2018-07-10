import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import './style/GlobalStyle';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.css';

import Homepage from './Homepage';

const Wrapper = styled.section`
  // display: flex;
  padding: 10px;`

ReactDOM.render(
  <Wrapper>
    <Homepage />
  </Wrapper>, document.getElementById('root'));
registerServiceWorker();
