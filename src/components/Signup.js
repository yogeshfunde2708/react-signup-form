import React, { useState } from "react";
import Axios from "axios";

export default function Signup(props) {
  const formObj = {
    email: "",
    name: "",
    gender: "",
    password: "",
    confirmpassword: "",
  };
  const { getUsers } = props;
  const [values, setValues] = useState(formObj);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const addBtn = (e) => {
    e.preventDefault();
    const { email, name, gender, password, confirmpassword } = values;
    if (!email || !name || !gender || !password || !confirmpassword) {
      alert("Please fill in all fields.");
    } else if (password !== confirmpassword) {
      alert("Password did not match, Please try again.");
    } else {
      Axios.post("http://localhost:5000/insert", values).then((response) => {
        if (response && response.data) {
          getUsers();
          setValues(formObj);
        }
      });
    }
  };

  return (
    <main className="mb-2 text-white overflow-auto ">
      <form className="needs-validation">
        <div className="card text-dark">
          <div className="card-body">
            <div className="card-body row g-4 ">
              <h2 className="text-center mt-3 ">Sign Up Here</h2>
              <div className="col-md-6">
                <label htmlFor="validationCustom01" className="form-label">
                  Enter Email:
                </label>
                <input
                  className="form-control col-10 mx-auto "
                  onChange={handleChange}
                  placeholder="Enter-Email"
                  type="text"
                  id="email-input"
                  maxLength="30"
                  name="email"
                  required=""
                  value={values.email}
                />{" "}
              </div>
              <div className="col-md-6">
                <label htmlFor="validationCustom02" className="form-label">
                  Enter Username:
                </label>
                <input
                  className="form-control col-10 mx-auto "
                  onChange={handleChange}
                  placeholder="Enter-Username"
                  type="text"
                  id="name-input"
                  maxLength="20"
                  required=""
                  name="name"
                  value={values.name}
                />{" "}
              </div>
              <div></div>
              <div className="col-md-6 mt-1">
                <label htmlFor="validationCustom3" className="form-label">
                  Enter Password:
                </label>
                <input
                  className="form-control col-10 mx-auto "
                  onChange={handleChange}
                  placeholder="Password"
                  type="password"
                  name="password"
                  id="password-input"
                  maxLength="15"
                  required=""
                  value={values.password}
                />{" "}
              </div>
              <div className="col-md-6 mt-1">
                <label htmlFor="validationCustom4" className="form-label">
                  Enter Confirm Password:
                </label>
                <input
                  className="form-control col-10 mx-auto "
                  onChange={handleChange}
                  placeholder="Confirm-Password"
                  type="password"
                  id="confirm-password-input"
                  maxLength="15"
                  required=""
                  name="confirmpassword"
                  value={values.confirmpassword}
                />{" "}
              </div>
              <div></div>
              <div className="col-md-6 mt-1">
                <label className="form-label">Select gender:</label>
                <select
                  className="form-select col-10 mx-auto float-left"
                  aria-label="Default select example"
                  name="gender"
                  value={values.gender}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="text-center">
                <button
                  id="add-name-btn"
                  className="btn btn-primary mt-0"
                  type="submit"
                  onClick={addBtn}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}
