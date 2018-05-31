import React from 'react';
import axios from 'axios';
import { List, Card } from 'antd';

const data = [
  {
    title: 'Title 1',
    name: 'Eko',
    mobile: 123456
  },
  {
    title: 'Title 2', name: 'Andri',
    mobile: 9008
  },
  {
    title: 'Title 3', name: 'Uo',
    mobile: 6565
  },
  {
    title: 'Title 4', name: 'Lala',
    mobile: 2342
  },
  {
    title: 'Title 5', name: 'bro',
    mobile: 52345
  },
  {
    title: 'Title 6', name: 'Dom',
    mobile: 3434
  },
];

export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users').then(res => {
      // axios.get('https://app.subarnanto.com/api/users').then(res => {
      this.setState({ users: res.data });
      console.log({ users: res.data });
    });
  }


  render() {
    return (
      <List
        grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
        dataSource={this.state.users}
        renderItem={user => (
          <List.Item>
            <Card title={user.title}>
              <ul>
                <li fullname={user.fullname}>
                  Nama: {user.fullname}
                </li>
                <li mobile={user.mobile}>
                  Mobile: {user.mobile}
                </li>
              </ul>
            </Card>
          </List.Item>
        )}
      />
    )
  }
}

