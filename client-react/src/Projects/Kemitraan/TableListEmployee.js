import React from 'react';
import axios from 'axios';
import { Table } from 'antd';

export default class Employee extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      employee: []
    }
  }

  componentDidMount() {
      // axios.get('https://app.subarnanto.com/api/employee/ordered').then(res => {
      axios.get('/api/employee').then(res => {
        this.setState({ employee: res.data });
        console.log({ employee: res.data });
    });
  }

  render() {

    const columns = [{
      title: 'Name',
      dataIndex: 'fullname',
      key: 'fullname',
      minWidth: 100
    }, {
      title: 'Title',
      dataIndex: 'title',
      key: 'title,'
    }, {
      title: 'Email',
      // className: 'column-money', css class
      dataIndex: 'email',
      key: 'email',
    }];

    return (
      <div>
        <Table bordered columns={columns} rowKey={this.state.id} dataSource={this.state.employee}/>
      </div>
    )
  }
}