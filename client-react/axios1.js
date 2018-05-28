import React from 'react';

import axios from 'axios';

axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

// export default class PersonList extends React.Component {
//   state = {
//     persons: []
//   }

//   componentDidMount() {
//     axios.get(`http://localhost:5000/api/inventory`)
//       .then(res => {
//         const persons = res.data;
//         this.setState({ persons });
//       })
//   }

//   render() {
//     return (
//       <ul>
//         { this.state.persons.map(person => <li>{person.name}</li>)}
//       </ul>
//     )
//   }
// }