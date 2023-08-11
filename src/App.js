import React from "react";
import "./App.css";
// import Axios from "axios";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import Table from "./components/Table";
import Update from "./components/Update";

function App() {
  return (
    <>
      <Navbar />
      <br></br>
      <br></br>
      <Signup />
      <Table />
      <Update />
      <Footer />
    
    </>
  );
}

export default App;
