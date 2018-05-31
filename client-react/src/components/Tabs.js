import React, { Component } from 'react';
import { Tabs } from 'antd';
import Inventory from './Data/Inventory';
import Userlist from './Data/Userlist';
import Form from './Data/Form';

const TabPane = Tabs.TabPane;

export default class Tab extends Component {
  render() {
    return (
      <Tabs type="card">
        <TabPane className="tile" tab="Form" key="1">
          <Form />
        </TabPane>
        <TabPane className="tile" tab="Inventory" key="2">
          <Inventory />
        </TabPane>
        <TabPane className="tile" tab="User List" key="3">
          <Userlist />
        </TabPane>
        <TabPane className="tile" tab="History" key="4">
          <Inventory />
        </TabPane>
      </Tabs>
    )
  }
}
