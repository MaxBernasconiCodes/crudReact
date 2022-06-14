import React from 'react'

const User = (props) => {
    let {user, getUser, deleteUser} = props;
    let {name, age, id} = user;
  return (
    <li>
        {name} | {age} | {id} <button onClick={()=>{getUser(id)}}>Mas</button>
        <button onClick={()=>{deleteUser(id)}}>Eliminar</button>
    </li>
  )
}

export default User