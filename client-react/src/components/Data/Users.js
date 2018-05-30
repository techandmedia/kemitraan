import React from 'react';
import axios from 'axios';

export default class Users extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Users: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/Users').then(res => {
      // axios.get('https://app.subarnanto.com/api/Users').then(res => {
      this.setState({ Users: res.data });
      console.log({ Users: res.data });
    });
  }

  render() {
    return this.state.Users.map(itemList => {
      let item = itemList;
      return (
        <div className="card margin-card">
          <div className="card-content">
            <div>
              <h4>Nama:  {item.fullname} </h4>
              <h4>ID Project:  {item.userid} </h4>
              <h4>Group:  {item.usergroup} </h4>
              <h4>Email:  {item.emailid} </h4>
              <h4>Title:  {item.title} </h4>
            </div>
          </div>
        </div>
      );
    })
  }
}
