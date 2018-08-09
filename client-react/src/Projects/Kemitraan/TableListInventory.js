import React from 'react';
import axios from 'axios';
import { Table } from 'antd';

export default class Inventory extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      employee: []
    }
  }

  componentDidMount() {
      axios.get('/api/product/orderedbydate').then(res => {
        this.setState({ Inventory: res.data });
        console.log({ Inventory: res.data });
    });
  }

  render() {

    const columns = [{
      title: 'Product',
      dataIndex: 'productname',
      key: 'productname'
    }, {
      title: 'Category',
      dataIndex: 'category',
      key: 'category,'
    }, {
      title: 'Model',
      dataIndex: 'model',
      key: 'model',
    }, {
      title: 'OS',
      dataIndex: 'os',
      key: 'os',
    }, {
      title: 'Description',
      dataIndex: 'detail',
      key: 'detail',
    }];

    return (
      <div>
        <Table bordered columns={columns} rowKey={this.state.id} dataSource={this.state.Inventory}/>
      </div>
    )
  }
}