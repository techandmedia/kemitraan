import React from 'react';
import axios from 'axios';

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
    return this.state.users.map(user => {
      return (
        <div className="card margin-card">
          <div className="card-content">
            <div>
              <h4>Nama:       {user.fullname} </h4>
              <h4>ID Project: {user.userid} </h4>
              <h4>Group:      {user.usergroup} </h4>
              <h4>Email:      {user.emailid} </h4>
              <h4>Title:      {user.title} </h4>
            </div>
          </div>
        </div>
      );
    })
  }
}
