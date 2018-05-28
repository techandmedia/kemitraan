import React, { Component } from 'react';
import { Tabs } from 'antd';
import Inventory from './Inventory/Inventory';


const TabPane = Tabs.TabPane;

export default class Tab extends Component {
  render() {
    return (
      <Tabs type="card">
        <TabPane tab="Inventory" key="1">
          <Inventory />
        </TabPane>
        <TabPane tab="User" key="2">Content of Tab Pane 2</TabPane>
        <TabPane tab="History" key="3">Content of Tab Pane 3</TabPane>
      </Tabs>
    )
  }
}
