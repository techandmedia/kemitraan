import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { Container } from 'semantic-ui-react';
import App from './App';
import Navbar from './components/Navbar';
import TitleInventory from './components/Header';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  // supaya ada dalam satu 'wadah', mobile, responsif
  <div className="container">
    <Navbar/>
    <TitleInventory />

    {/* pakai class tile agar lebar card component 'proporsional'   */}
    <div className="tile">
      <App />
    </div>
  </div>, document.getElementById('root'));
registerServiceWorker();
