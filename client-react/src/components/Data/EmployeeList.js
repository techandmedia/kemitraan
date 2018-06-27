import React from 'react';
import axios from 'axios';
import { List, Card } from 'antd';
// import './card.css';

export default class EmployeeList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      employee: []
    }
  }

  componentDidMount() {
    // axios.get('http://localhost:5000/employee').then(res => {
      axios.get('https://app.subarnanto.com/api/employee/ordered').then(res => {
        this.setState({ employee: res.data });
        console.log({ employee: res.data });
      });
    }

  render() {
        return(
      <List grid = {{ gutter: 8, xs: 1, sm: 2, md: 3, lg: 3, xl: 3, xxl: 3 }}
        // grid={{ gutter: 8, xxl: 3, md: 4, lg: 4 }}
        dataSource = { this.state.employee }
        renderItem = {
        staf => (
          <List.Item >
            <Card key={staf.nameid} title={staf.fullname} style={{ background: '#009688', padding: 0, minHeight: 280 }} >
              <ul >
                <li key={staf.uid}>Project ID: {staf.id}</li>
                <li key={staf.projid}>Project ID: {staf.stafid}</li>
                <li key={staf.groupid}>staf Group: {staf.stafgroup}</li>
                <li key={staf.mailid}>Email: {staf.emailid}</li>
                <li key={staf.mobileid}>Mobile: {staf.mobile}</li>
                <li key={staf.titleid}>Title: {staf.title}</li>
                <li key={staf.joinid}>Join Date: {staf.created_at}</li>
              </ul>
            </Card>
          </List.Item>
        )
      }
      />
    )
  }
}
