import React, { Component } from 'react';
import { Tabs } from 'antd';
import Inventory from './Data/Inventory';
import Userlist from './Data/Userlist';
import FormUser from './Data/FormUser';
import FormInventory from './Data/FormItem';
import ProductHistory from './Data/ProductHistory';

const TabPane = Tabs.TabPane;

export default class Tab extends Component {
  render() {
    return (
      <Tabs defaultActiveKey="1" type="card">
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
          <ProductHistory />
        </TabPane>
      </Tabs>
    )
  }
}
