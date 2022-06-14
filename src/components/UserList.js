import React from 'react'
import User from './User';

const UserList = (props) => {
    let {users, getUser, deleteUser} = props;
  return (
    <>
    <hr></hr>
    <h2>Usuarios:</h2>
    <ul>
        {users.map(user =><User user={user} getUser={getUser} deleteUser={deleteUser} />)}
    </ul>
    </>
  )
}

export default UserList