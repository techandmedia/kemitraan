import React from 'react';
import { Button } from 'antd';
import './layout.css';

const Home = () => (
  <div>
    <div style={layout}>
      <div style={divLeft}>
        <h1 style={{ color: 'white', fontFamily: 'Quicksand' }}>
          KEMITRAAN
            </h1>
        <h2 className="mis">Management</h2>
        <h2 className="mis1">Inventory</h2>
        <h2 className="mis2">System</h2>
      </div>
      <div style={divRight}>
        {/* <ul> */}
          {/* <li>Home</li> */}
          {/* <li><Link to="/">Home</Link></li>
          <li><Link to="/FormProduct">Form</Link></li>
          <li>Data</li>
        </ul> */}
      </div>
      <div className="tes">
        <div style={{ borderRadius: '3px', paddingTop: '15%' }}>
          <Button className="form" size="large">Form Pegawai</Button>
          <Button className="form" size="large">Form Produk</Button>
          <Button className="form" size="large">Form Inventory</Button>
        </div>
        <div style={{ backgroundColor: '#096dd9', borderRadius: '15px', paddingTop: '15%' }}>
          <Button className="data" size="large">Data Pegawai</Button>
          <Button className="data" size="large">Data Produk</Button>
          <Button className="data" size="large">Data Inventory</Button>
        </div>
      </div>
      <div className="garisTitik"></div>
      <div className="garisTitik1"></div>
      <div className="garisTitik2"></div>
      <div className="garisTitik3"></div>
      <div className="garisTitik4"></div>
    </div>
  </div>
)

export default Home;

const layout = {
  display: 'flex',
  flex: 1,
  height: '100vh',
  fontSize: '22px',
  color: 'white',
}

const divLeft = {
  width: '50%',
  background: 'linear-gradient(to right, #096dd9 , #1890ff)',
  // backgroundColor: "#4174D1",
  padding: '10px',
  textAlign: 'right',
}

const divRight = {
  width: '50%',
  background: 'linear-gradient(to left, #40a9ff , #bae7ff)',
  // backgroundColor: "#9AB3FA",
  padding: '10px',
}