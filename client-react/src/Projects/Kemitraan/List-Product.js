import React from 'react';
import axios from 'axios';
import { Table, Input, InputNumber, Popconfirm, Form } from 'antd';

const FormItem = Form.Item;
const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
  getInput = () => {
    if (this.props.inputType === 'number') {
      return <InputNumber />;
    }
    return <Input />;
  };

  render() {
    const {
      editing,
      dataIndex,
      title,
      inputType,
      record,
      index,
      ...restProps
    } = this.props;
    return (
      <EditableContext.Consumer>
        {(form) => {
          const { getFieldDecorator } = form;
          return (
            <td {...restProps}>
              {editing ? (
                <FormItem style={{ margin: 0 }}>
                  {getFieldDecorator(dataIndex, {
                    rules: [{
                      required: true,
                      message: `Please Input ${title}!`,
                    }],
                    initialValue: record[dataIndex],
                  })(this.getInput())}
                </FormItem>
              ) : restProps.children}
            </td>
          );
        }}
      </EditableContext.Consumer>
    );
  }
}

class EditableTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [], editingKey: '' };
    this.columns = [
      {
        title: 'Product Name',
        dataIndex: 'productname',
        width: '25%',
        editable: true,
      },
      {
        title: 'OS',
        dataIndex: 'os',
        width: '10%',
        editable: true,
      },
      {
        title: 'Category',
        dataIndex: 'category',
        width: '15%',
        editable: true,
      },
      {
        title: 'Model',
        dataIndex: 'model',
        width: '20%',
        editable: true,
      },
      {
        title: 'Serial Number',
        dataIndex: 'serialnumber',
        width: '20%',
        editable: true,
      },
      {
        title: 'Operation',
        dataIndex: 'operation',
        width: '10%',
        render: (text, record) => {
          const editable = this.isEditing(record);
          return (
            <div>
              {editable ? (
                <span>
                  <EditableContext.Consumer onSubmit={this.handleSubmit}>
                    {form => (
                      <a
                        href="javascript:;"
                        // onClick={() => this.save(form, record.key)} keyTOid
                        onClick={() => this.save(form, record.id)}
                        style={{ marginRight: 8 }}
                      >
                        Save
                      </a>
                    )}
                  </EditableContext.Consumer>
                  <Popconfirm
                    title="Sure to cancel?"
                    // onConfirm={() => this.cancel(record.key)} keyTOid
                    onConfirm={() => this.cancel(record.id)}
                  >
                    <a>Cancel</a>
                  </Popconfirm>
                </span>
              ) : (
                  // <a onClick={() => this.edit(record.key)}>Edit</a> keyTOid
                  <a onClick={() => this.edit(record.id)}>Edit</a>
                )}
            </div>
          );
        },
      },
    ];
  }

  handleProductNameChange = event => { this.setState({ productname: event.target.value }) }
  handleModelchange = event => { this.setState({ model: event.target.value }) }
  handleSerialnumberChange = event => { this.setState({ serialnumber: event.target.value }) }
  handlePriceChange = event => { this.setState({ price: event.target.value }) }
  handleEquipmentChange = event => { this.setState({ equipment_condition: event.target.value }) }
  handleDetailChange = event => { this.setState({ detail: event.target.value }) }
  handleImageChange = event => { this.setState({ image: event.target.value }) }

  handleSubmit = event => {
    event.preventDefault();
    axios.post('https://app.subarnanto.com/api/product/new',
    // axios.post('/api/product/new',
      {
        category: this.state.category,
        productname: this.state.productname,
        os: this.state.os,
        serialnumber: this.state.serialnumber,
        model: this.state.model,
        price: this.state.price,
        equipment_condition: this.state.equipment_condition,
        detail: this.state.detail,
        image: this.state.image
      })
      // .then(
      //   // const success => {
      //   function success() {
      //     const modal = Modal.success({
      //       title: 'Success',
      //       content: 'Data successfully add',
      //     });
      //     setTimeout(() => modal.destroy(), 2000);
      //   }
      //   // console.log(res);
      //   // console.log(res.data);
      // )
  }

  componentDidMount() {
    axios.get('/api/product/orderedbydate').then(res => {
    // axios.get('https://app.subarnanto.com/api/product/orderedbyname').then(res => {
      // axios.get('https://app.subarnanto.com/api/product/ordered').then(res => {
      this.setState({ products: res.data });
      // console.log({ products: res.data });
    });
  }

  isEditing = (record) => {
    // return record.key === this.state.editingKey;
    return record.id === this.state.editingKey;
  };

  // edit(key) {
  edit(id) {
    // this.setState({ editingKey: key });
    this.setState({ editingKey: id });
  }

  // save(form, key) {
  save(form, id) {
    form.validateFields((error, row) => {
      if (error) {
        return;
      }
      const newData = [...this.state.products]; //array of object
      // console.log('newdata 1', newData);
      // const index = newData.findIndex(item => key === item.key);
      const index = newData.findIndex(item => id === item.id); // get item ID
      // console.log('index 1',index);
      console.log('id 1',id);
      if (index > -1) {
        const item = newData[index];
        console.log('item 1', item);
        newData.splice(index, 1, {
          ...item,
          ...row,
        })
        console.log('item 2', item);;
        this.setState({ products: newData, editingKey: '' });
        // console.log('this setstate', this.setState({ products: newData, editingKey: '' })); undefined
      } else {
        newData.push(this.state.products);
        console.log('newData push', newData);
        this.setState({ products: newData, editingKey: '' });
        console.log('state2', this.setState({ products: newData, editingKey: '' }));
      }
    });
  }

  cancel = () => {
    this.setState({ editingKey: '' });
  };

  render() {

    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell,
      },
    };

    const columns = this.columns.map((col) => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          // inputType: col.dataIndex === 'age' ? 'number' : 'text', cek type input apakah number atau teks
          inputType: col.dataIndex === 'serialnumber' ? 'number' : 'text', // 
          dataIndex: col.dataIndex,
          title: col.title,
          editing: this.isEditing(record),
        }),
      };
    });

    return (
      <Table
        rowKey={this.state.id}
        components={components}
        bordered
        dataSource={this.state.products}
        columns={columns}
        rowClassName="editable-row"
      />
    );
  }
}

export default EditableTable;