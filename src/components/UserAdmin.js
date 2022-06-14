import React, { useState } from "react";

const UserAdmin = (props) => {

  let {addUser} = props;
  const [newUserName, setNewUserName] = useState("");
  const [newUserPass, setNewUserPass] = useState("");
  const [newUserAge, setNewUserAge] = useState(0);

  function sendUser() {
    let newUser = {
      name: newUserName,
      pass: newUserPass,
      age: newUserAge,
    };
    console.debug(newUser);
    addUser(newUser);
    setNewUserName("");
    setNewUserPass("");
    setNewUserAge("");
  }

  return (
    <div className="inputform">
      <input
        onChange={(e) => {
          setNewUserName(e.target.value);
        }}
        type="text"
        id="name"
        placeholder="Nombre"
        value={newUserName}
      />
      <input
        onChange={(e) => {
          setNewUserPass(e.target.value);
        }}
        type="text"
        id="pass"
        placeholder="Pass"
        value={newUserPass}
      />
      <input
        onChange={(e) => {
          setNewUserAge(e.target.value);
        }}
        type="number"
        id="age"
        placeholder="Edad"
        value={newUserAge}
      />
      <button onClick={sendUser}>Enviar</button>
    </div>
  );
};

export default UserAdmin;
