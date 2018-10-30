import React from 'react';
import { connect } from 'react-redux';

const UserStats = ({ users }) => {
  console.log('%c users', 'color: blue', users);
  const total = users.length;
  const cats = users.filter(user => user.animalPreference === 'cats').length;
  const dogs = users.filter(user => user.animalPreference === 'dogs').length;

  return (
    <table className="pure-table stats">
      <thead>
        <tr>
          <th>Total</th>
          <th>Cats</th>
          <th>Dogs</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{total}</td>
          <td>{cats}</td>
          <td>{dogs}</td>
        </tr>
      </tbody>
    </table>
  )
}

function mapStateToProps(state) {
  console.log('%c mapStateToProps', 'color: blue', state);

  return {
    users: state.user.users
  }
}

export default connect(mapStateToProps)(UserStats);
