import React from 'react';
import axios from 'axios';
import { Form, Input, Button } from 'antd';
// import Layout from './Layout';
import Header from '../components/header';
import Title from '../components/title';

const FormItem = Form.Item;
const formItemLayout = {
  // length label
  labelCol: {
    // xs: { span: 4, offset: 0 },
    sm: { span: 8 },
    md: { span: 6 },
    lg: { span: 6 },
    xl: { span: 6 },
  },
  // length content
  wrapperCol: {
    xs: { span: 8 },
    sm: { span: 8 },
    md: { span: 8 },
    lg: { span: 8 },
    xl: { span: 6 },
  },
};

export default class FormUser extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  state = {
    proj_id: '',
    fullname: '',
    usergroup: '',
    email: '',
    mobile: '',
    title: '',

  };

  handleProjIDChange = event => { this.setState({ proj_id: event.target.value }) }
  handleFullNameChange = event => { this.setState({ fullname: event.target.value }) }
  handleUserGroupChange = event => { this.setState({ usergroup: event.target.value }) }
  handleEmailChange = event => { this.setState({ email: event.target.value }) }
  handleMobileChange = event => { this.setState({ mobile: event.target.value }) }
  handleTitleChange = event => { this.setState({ title: event.target.value }) }

  handleSubmit = event => {
    event.preventDefault();

    // const userform = {proj_id: this.state.proj_id};
    // const fullnameForm = {fullname: this.state.fullname};
    // const usergroupForm = {usergroup: this.state.usergroup};
    // const emailForm = {email: this.state.email};
    // const mobileForm = {mobile: this.state.mobile};
    // const titleForm = {title: this.state.title};

    axios.post('/api/employee/new',
      // axios.post('https://app.subarnanto.com/users', 
      { proj_id: this.state.proj_id, fullname: this.state.fullname, usergroup: this.state.usergroup, email: this.state.email, mobile: this.state.mobile, title: this.state.title }, )
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <Header />
        <Title />
        <h1 style={{ fontFamily: 'Quicksand', fontSize: '30px'}}>Form User</h1>
        <div>
          <Form onSubmit={this.handleSubmit}>
            <FormItem {...formItemLayout} label="User Project ID">
              <Input type="text" name="this.state.proj_id" onChange={this.handleProjIDChange} />
            </FormItem>
            <FormItem {...formItemLayout} label="Full Name">
              <Input type="text" name="this.state.fullname" onChange={this.handleFullNameChange} />
            </FormItem>
            <FormItem {...formItemLayout} label="User Group">
              <Input type="text" name="this.state.usergroup" onChange={this.handleUserGroupChange} />
            </FormItem>
            <FormItem {...formItemLayout} label="Email">
              <Input type="text" name="this.state.email" onChange={this.handleEmailChange} />
            </FormItem>
            <FormItem {...formItemLayout} label="Mobile">
              <Input type="text" name="this.state.mobile" onChange={this.handleMobileChange} />
            </FormItem>
            <FormItem {...formItemLayout} label="Title">
              <Input type="text" name="this.state.title" onChange={this.handleTitleChange} />
            </FormItem>
            <FormItem style={formStyle} {...buttonLayout}>
              <Button type="primary" htmlType="submit">
                Add User
          </Button>
              <Button style={{ marginLeft: 20 }} type="primary">
                Clear (not yet working!)
              </Button>
            </FormItem>
          </Form>
        </div>
      </div>
    )
  }
}

const buttonLayout = {
  wrapperCol: {
    // xs: { span: 1 },
    sm: { offset: 8 },
    md: { offset: 6 },
    lg: { offset: 6 },
    xl: { offset: 6 }
  }
}

const formStyle = {
  margin: 5,
  padding: 0,
  color: 'rgb(250,128,114)'
}



//   <FormProduct style={formStyle} {...buttonLayout}>
            //   <Button type="primary" htmlType="submit">
            //     Add Item
            //   </Button>
            //   {/* <Button style={{ marginLeft: 20 }} type="primary" onClick={this.handleReset}> */}
            //   <Button style={{ marginLeft: 20 }} type="primary">
            //     Clear (not yet working!)
            //   </Button>
            // </FormProduct>
      // <Form onSubmit={this.handleSubmit}>
      //   <FormItem {...formItemLayout}>
      //     <label>User Project proj_id:  <input type="text" name="this.state.proj_id" onChange={this.handleProjIDChange} /></label>
      //   </FormItem>
      //   <FormItem {...formItemLayout}>
      //     <label>Full Name:  <input type="text" name="this.state.fullname" onChange={this.handleFullNameChange} /></label><br />
      //   </FormItem>
      //   <FormItem {...formItemLayout}>
      //     <label>User Group:  <input type="text" name="this.state.usergroup" onChange={this.handleUserGroupChange} /></label><br />
      //   </FormItem>
      //   <FormItem {...formItemLayout}>
      //     <label>Email:  <input type="text" name="this.state.email" onChange={this.handleEmailChange} /></label>
      //   </FormItem>
      //   <FormItem {...formItemLayout}>
      //     <label>Mobile:  <input type="text" name="this.state.mobile" onChange={this.handleMobileChange} /></label>
      //   </FormItem>
      //   <FormItem {...formItemLayout}>
      //     <label>Title:  <input type="text" name="this.state.title" onChange={this.handleTitleChange} /></label>
      //   </FormItem>
      //   <button type="submit">Add</button>
      // </Form>