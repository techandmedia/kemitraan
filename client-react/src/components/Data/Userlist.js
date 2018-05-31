import React from 'react';
import axios from 'axios';
import { List, Card, Col, Row } from 'antd';



export default class UserList extends React.Component {
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
      // grid={{ gutter: 8, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
        grid={{ gutter: 8, xxl: 3, md: 4, lg: 4 }}
        dataSource={this.state.users}
        renderItem={user => (
          <List.Item>
            <Card fullname={user.fullname} title={user.fullname}>
              <ul>
                <li userid={user.userid}>Project ID: {user.userid}</li>
                <li usergroup={user.usergroup}>User Group: {user.usergroup}</li>
                <li emailid={user.emailid}>Email: {user.emailid}</li>
                <li mobile={user.mobile}>Mobile: {user.mobile}</li>
                <li title={user.title}>Title: {user.title}</li>
                <li created_at={user.created_at}>Join Date: {user.created_at}
                </li>
              </ul>
            </Card>
          </List.Item>
        )}
      />
    )
  }
}
