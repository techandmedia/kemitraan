import React, { Component } from 'react';
import { Tabs } from 'antd';
import Inventory from './Data/Inventory';
import Userlist from './Data/Userlist';
import FormUser from './Data/FormUser';
import FormInventory from './Data/FormItem';
import ProductHistory from './Data/ProductHistory-v2';
import Win7 from './Filter/Windows7';
import Win8 from './Filter/Win810Pro';
import Win8SL from './Filter/Win810SL';
import Macbook from './Filter/Macbook';

const TabPane = Tabs.TabPane;

export default class Tab extends Component {
  render() {
    return (
      <Tabs defaultActiveKey="5" type="card">
        <TabPane tab="Form User" key="1">
          <FormUser />
        </TabPane>
        <TabPane tab="Form Item" key="2">
          <FormInventory />
        </TabPane>
        <TabPane tab="Inventory" key="3">
          <Inventory />
        </TabPane>
        <TabPane tab="User List" key="4">
          <Userlist />
        </TabPane>
        <TabPane tab="History" key="5">
          <Tabs defaultActiveKey="1">
            <TabPane tab="Product History" key="1">
              <ProductHistory />
            </TabPane>
            <TabPane tab="Windows 7" key="2">
              <Win7 />
            </TabPane>
            <TabPane tab="Windows 8 / 10 Pro" key="3">
              <Win8 />
            </TabPane>
            <TabPane tab="Windows 8 / 10 SL" key="4">
              <Win8SL />
            </TabPane>
            <TabPane tab="Macbook" key="5">
              <Macbook />
            </TabPane>
          </Tabs>
        </TabPane>
      </Tabs>
    )
  }
}
