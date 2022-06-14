import "./App.css";
import UserAdmin from "./components/UserAdmin";
import UserList from "./components/UserList";
import { useEffect, useState } from "react";

function App() {
  const axios = require("axios").default;
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  function getAllUsers() {
    axios
      .get("https://62a7b8c6bedc4ca6d7cce28d.mockapi.io/users")
      .then(function (response) {
        setUserList(response.data);
      });
  }
  function addUser(user) {
    axios
      .post("https://62a7b8c6bedc4ca6d7cce28d.mockapi.io/users", user)
      .then((response) => {
        console.debug(response);
        setUserList([...userList, response.data]);
      })
      .catch((error) => {
        console.debug(error);
      });
  }

  function getUser(id) {
    axios
      .get(`https://62a7b8c6bedc4ca6d7cce28d.mockapi.io/users/${id}`)
      .then((response) => {
        console.debug(response.data);
      });
  }

  function updateUser(id, userData) {
    axios.put(
      `https://62a7b8c6bedc4ca6d7cce28d.mockapi.io/users/${id}`,
      userData
    );
  }

  function deleteUser(id) {
    axios
      .delete(`https://62a7b8c6bedc4ca6d7cce28d.mockapi.io/users/${id}`)
      .then((response) => {
        getAllUsers();
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <UserAdmin addUser={addUser} />
        <UserList users={userList} getUser={getUser} deleteUser={deleteUser} />
      </header>
    </div>
  );
}

export default App;
