import React, { Component } from 'react';
import { Tabs } from 'antd';
import Inventory from './Data/Inventory';
import Users from './Data/Users';

const TabPane = Tabs.TabPane;

export default class Tab extends Component {
  render() {
    return (
      <Tabs type="card">
        <TabPane className="tile" tab="Form" key="1">
          <Inventory />
        </TabPane>
        <TabPane className="tile" tab="Inventory" key="2">
          <Inventory />
        </TabPane>
        <TabPane className="tile" tab="Users" key="3">
          <Users />
        </TabPane>
        <TabPane className="tile" tab="History" key="4">
          <Inventory />
        </TabPane>
      </Tabs>
    )
  }
}
