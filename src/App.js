import React, { useEffect, useState } from "react";
import "./App.css";
// import Axios from "axios";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import Table from "./components/Table";
import Update from "./components/Update";
import Axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    Axios.get("http://localhost:5000/getAll").then((response) => {
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

  return (
    <>
      <Navbar getUsers={getUsers}/>
      <br></br>
      <br></br>
      <Signup getUsers={getUsers} />
      <Table users={users} />
      <Update   />
      <Footer />
    </>
  );
}

export default App;
