import React from 'react';
import { connect } from 'react-redux';

const UserList = ({ users }) => {
  return (
    <table className="pure-table people">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Cats or Dogs</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user =>
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.animalPreference}</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(UserList);
