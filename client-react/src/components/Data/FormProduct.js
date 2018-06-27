import React from 'react';
import axios from 'axios';
import { Button, Cascader, Form, Input, Modal } from 'antd';

const FormProduct = Form.Item;
// const Option = Select.Option;

const computerType = [{
  value: 'computer',
  label: 'Computer',
  children: [{
    value: 'desktop',
    label: 'Desktop',
    children: [
      {
        value: 'aio',
        label: 'All in One PC'
      },
      {
        value: 'pc',
        label: 'PC Desktop'
      }]
  }, {
    value: 'laptop',
    label: 'Laptop'
  }]
}, {
  value: 'jaringan',
  label: 'Alat Jaringan',
}]

export default class FormInventory extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  state = {
    category: '',
    productname: '',
    model: '',
    serialnumber: '',
    price: '',
    equipment_condition: '',
    detail: '',
    image: '',
  };

  handleCategoryChange = value => { this.setState({ category: value }) }
  handleProductNameChange = event => { this.setState({ productname: event.target.value }) }
  handleModelchange = event => { this.setState({ model: event.target.value }) }
  handleSerialnumberChange = event => { this.setState({ serialnumber: event.target.value }) }
  handlePriceChange = event => { this.setState({ price: event.target.value }) }
  handleEquipmentChange = event => { this.setState({ equipment_condition: event.target.value }) }
  handleDetailChange = event => { this.setState({ detail: event.target.value }) }
  handleImageChange = event => { this.setState({ image: event.target.value }) }

  // resetFields = this.state.resetFields();
  handleReset = event => { this.setState({
    category: '',
    productname: '',
    model: '',
    serialnumber: '',
    price: '',
    equipment_condition: '',
    detail: '',
    image: '',
  }) }
  
  handleSubmit = event => {
    event.preventDefault();

    axios.post('https://app.subarnanto.com/api/product/new',
      {
        category: this.state.category,
        productname: this.state.productname,
        serialnumber: this.state.serialnumber,
        model: this.state.model,
        price: this.state.price,
        equipment_condition: this.state.equipment_condition,
        detail: this.state.detail,
        image: this.state.image
      })
      .then(
        // const success => {
        function success() {
          const modal = Modal.success({
            title: 'Success',
            content: 'Data successfully add',
          });
          setTimeout(() => modal.destroy(), 2000);
          
          // this.state = this.handleReset;
          // handleReset = () => { this.props.form.resetFields(); }
          // Function([this.handleReset: string[]]);
        }
        // console.log(res);
        // console.log(res.data);
      )
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormProduct style={formStyle} {...formProductLayout} label="Computer Category">
          <Cascader options={computerType} category={this.state.category} onChange={this.handleCategoryChange} />
        </FormProduct>
        <FormProduct style={formStyle} {...formProductLayout} label="Operating System">
          <Cascader />
        </FormProduct>
        <FormProduct style={formStyle}  {...formProductLayout} label="Product Name">
          <Input type="text" productname={this.state.productname} onChange={this.handleProductNameChange} />
        </FormProduct>
        <FormProduct style={formStyle} {...formProductLayout} label="Serial Number">
          <Input type="text" serialnumber={this.state.serialnumber} onChange={this.handleSerialnumberChange} />
        </FormProduct>
        <FormProduct style={formStyle} {...formProductLayout} label="Model">
          <Input type="text" model={this.state.model} onChange={this.handleModelchange} />
        </FormProduct>
        <FormProduct style={formStyle} {...formProductLayout} label="Item Price">
          <Input type="text" price={this.state.price} onChange={this.handlePriceChange} />
        </FormProduct>
        <FormProduct style={formStyle} {...formProductLayout} label="Item Condition">
          <Input type="text" equipment_condition={this.state.equipment_condition} onChange={this.handleEquipmentChange} />
        </FormProduct>
        <FormProduct {...formProductLayout} label="Detail">
          <Input type="text" detail={this.state.detail} onChange={this.handleDetailChange} />
        </FormProduct>
        {/* <FormProduct {...formProductLayout} label="Image">
          <Input type="text" productname="this.state.detail" onChange={this.handleDetailChange} />
        </FormProduct> */}
        <FormProduct style={formStyle} {...buttonLayout}>
          <Button type="primary" htmlType="submit">
            Add Item
          </Button>
          <Button style={{ marginLeft: 20 }} type="primary" onClick={this.handleReset}>
            Clear
          </Button>
        </FormProduct>

      </Form>
    )
  }
}

const formStyle = {
  margin: 5,
  padding: 0,
  color: 'rgb(250,128,114)'
}

const formProductLayout = {
  // length label
  labelCol: {
    // xs: { span: 4, offset: 0 },
    sm: { span: 8 },
    md: { span: 6 },
    lg: { span: 4 },
    xl: { span: 3 },
  },
  // length content
  wrapperCol: {
    xs: { span: 8 },
    sm: { span: 14 },
    md: { span: 10 },
    lg: { span: 8 },
    xl: { span: 6 },
  },
};

const buttonLayout = {
  wrapperCol: {
    // xs: { span: 1 },
    sm: { offset: 8 },
    md: { offset: 6 },
    lg: { offset: 4 },
    xl: { offset: 3 }
  }
}