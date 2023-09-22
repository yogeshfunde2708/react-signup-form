import React, { useState } from "react";
import Axios from "axios";

export default function Navbar(props) {
  const { users, setUsers } = props;
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    const { value} = e.target;
    setSearchValue(value);
  }

  const searchBtn = (e) => {
    e.preventDefault();
    if (!searchValue) {
      alert("Please enter a search value");
      return;
    }
    Axios.get(`http://localhost:5000/search/${searchValue}`).then(
      (response) => {
        if (response && response.data) {
          setUsers( response.data.data );
        }
      }
    );
  };
  const handleClear = () => {
    setUsers(users)
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top p-2">
      <div className="container-fluid">
        <a className="navbar-brand " href="/">
          Sign Up Form
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo"
          aria-controls="navbarTogglerDemo"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              aria-label="Search"
              type="search"
              placeholder="Search-By-Username"
              id="search-input"
              value={searchValue}
              onChange={handleChange}
            />

            <button
              className="btn btn-outline-success"
              type="submit"
              id="search-btn"
              onClick={searchBtn}
            >
              Search
            </button>

            <button
              className="btn btn-outline-warning"
              type="submit"
              id="clear-btn"
              onClick={handleClear}
            >
              Clear
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
