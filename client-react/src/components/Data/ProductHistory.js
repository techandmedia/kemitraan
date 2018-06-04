import React from 'react';
import axios from 'axios';
import { Table } from 'antd';

const columns = [{
  title: 'Name',
  dataIndex: 'fullname',
  key: 'fullname',
}, {
  title: 'User Group',
  dataIndex: 'usergroup',
  key: 'usergroup',
}, {
  title: 'Computer ID',
  dataIndex: 'computerid',
  key: 'computerid',
}, {
  title: 'Domain',
  dataIndex: 'domain',
  key: 'domain',
}, {
  title: 'Windows 7 Pro',
  dataIndex: 'win7pro',
  key: 'win7pro',
}, {
  title: 'Windows 8 Pro',
  dataIndex: 'win8pro',
  key: 'win8pro',
}, {
  title: 'Windows 8 SL',
  dataIndex: 'win8sl',
  key: 'win8sl',
}, {
  title: 'Office 2010',
  dataIndex: 'off10',
  key: 'off10',
}, {
  title: 'Office 2013',
  dataIndex: 'off13',
  key: 'off13',
}, {
  title: 'Office 2013',
  dataIndex: 'off16',
  key: 'off16',
}, {
  title: 'Antivirus',
  dataIndex: 'av',
  key: 'av',
}, {
  title: 'VPN',
  dataIndex: 'vpn',
  key: 'vpn',
}, {
  title: 'Mobile Device',
  dataIndex: 'mobile_device',
  key: 'mobile_device',
}]

export default class ProductHistory extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/product-history').then(res => {
      // axios.get('https://app.subarnanto.com/api/users').then(res => {
      this.setState({ users: res.data });
      console.log({ users: res.data });
    });
  }

  render() {
    return (
      // const dataSource={this.state.users};
      <Table dataSource={this.state.users} columns={columns} />
    )
  }
}

// const dataSource = [{
//   key: '1',
//   name: 'Mike',
//   age: 32,
//   address: '10 Downing Street'
// }, {
//   key: '2',
//   name: 'John',
//   age: 42,
//   address: '10 Downing Street'
// }];


