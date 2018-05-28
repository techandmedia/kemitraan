import React from 'react';
import axios from 'axios';
// import { Container } from 'semantic-ui-react';

export default class Inventory extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      inventory: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8000/api/inventory').then(res => {
    // axios.get('https://app.subarnanto.com/api/inventory').then(res => {
      this.setState({ inventory: res.data });
      console.log({ inventory: res.data });
    });
  }

  render() {
    return this.state.inventory.map(itemList => {
      let item = itemList;
      return (
        <div className="card margin-card">
          <div className="card-content">
            <div className="media">
              <div>
                <figure className="image is-96x96">
                  <img src={item.image} />
                </figure>
              </div>
            </div>
            <div>
              <h4>Nama:  {item.name} </h4>
              <h4>Nomor Seri:  {item.serial} </h4>
              <h4>ID Tag:  {item.tag} </h4>
            </div>
          </div>
        </div>
      );
    })
  }
}

  // render() {
  //   return this.state.inventory.map(item => {
  //     return (
  //       <div key={item.serial}>
  //         <h4>Nama:  {item.name} </h4>
  //         <h4>Nomor Seri:  {item.serial} </h4>
  //         <h4>ID Tag: {item.tag} </h4>
  //         <img src={item.image} alt="tes"/>
  //       </div>
  //     );
  //   })
  // }
  // render() {
  //   return this.state.inventory.map((itemList, key) => {
  //     let item = itemList;
  //     return (
  //       <div key={key}>
  //         <h4>Nama:  { item.name } </h4>
  //         <h4>Nomor Seri:  { item.serial } </h4>
  //         <h4>ID Tag:  { item.tag } </h4>
  //         <img src={ item.image }/>
  //       </div>
  //     );
  //   })
  // }
  // render() {
  //   return this.state.inventory.map(itemList => {
  //       let item = itemList;
  //       return (
  //           <div key={ item.id }>
  //               <h4>Nama:  { item.name } </h4>
  //               <h4>Nomor Seri:  { item.serial } </h4>
  //               <h4>ID Tag:  { item.tag } </h4>
  //               <img src={ item.image } />
  //           </div>
  //       );
  //   })
  // }

