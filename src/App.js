import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import Table from "./components/Table";
import Update from "./components/Update";
import Axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

// const [updateRow, setUpdateRow] = useState(null)

  const getUsers = () => {
    Axios.get("http://localhost:5000/getAll")
    .then((response) => {
      if (response && response.data) {
        const users = response.data.data;
        setUsers(users);
      }
    });
  };
  useEffect(() => {
    getUsers();
    return () => {};
  }, []);

  // const handleUpdateClick = (ID) => {
  //   setUpdateRow(ID);
  // };
 
  return (
    <>
      <Navbar getUsers={getUsers}/>
      <br></br>
      <br></br>
      <Signup getUsers={getUsers} />
      <Table users={users} handleUpdateClick={handleUpdateClick} />
      <Update getUsers={getUsers} />
      <Footer />
    </>
  );
}

export default App;
