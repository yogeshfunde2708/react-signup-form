import React from "react";
import "./App.css";
// import Axios from "axios";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Table from "./components/Table";
import Update from "./components/Update";

function App() {
  return (
    <>
      <Navbar />
      <br></br>
      <br></br>
      <Login />
      <Table />
      <Update />
      <Footer />
    
    </>
  );
}

export default App;
