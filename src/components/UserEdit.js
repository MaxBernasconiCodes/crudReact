import React from 'react'

const UserEdit =  (props) => {
    let {id} = props;
    
    const [userName, setUserName] = useState("");
    const [userPass, setUserPass] = useState("");
    const [userAge, setUserAge] = useState(0);
  
    function updateUser() {
      let updatedUser = {
        name: userName,
        pass: userPass,
        age: userAge,
      };
     
      setUserName("");
      setUserPass("");
      setUserAge("");
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
        <button onClick={updateUser}>Enviar</button>
      </div>
    );
  };

export default UserEdit