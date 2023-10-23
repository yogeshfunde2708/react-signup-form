import React, { useState } from "react";
import Axios from "axios";

export default function Update(props) {
  const { showUpdateForm, users } = props;
  const formObj = {
    ID: users.ID,
    name: users.name,
    email: users.email,
    password: users.password,
    confirmpassword: users.confirmpassword,
    gender: users.gender,
  };
  
  const { getUsers } = props;
  const [values, setValues] = useState(formObj);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const updateBtn = (e) => {
    e.preventDefault();
    const { email, name, gender, password, confirmpassword } = values;
    if (!email || !name || !gender || !password || !confirmpassword) {
      alert("Please fill in all fields.");
    } else if (password !== confirmpassword) {
      alert("Password did not match, Please try again.");
    } else {
      Axios.patch(`http://localhost:5000/update/${values.ID}`, values).then(
        (response) => {
          if (response && response.data) {
            getUsers();
            setValues(formObj);
          }
        }
      );
    }
  };
  return (
    <main
      className={`mb-2 text-white overflow-auto ${
        showUpdateForm ? "" : "hidden"
      }`}
    >
      <form>
        <div className="card text-dark row g-3">
          <div className="card text-dark">
            <div className="card-body row g-4">
              <h2 className="mt-3 text-center">Edit Here</h2>
              <div className="col-md-6">
                <label>Edit Email:</label>
                <input
                  className="form-control col-10 mx-auto"
                  type="text"
                  id="update-email-input"
                  placeholder="update-email"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                />
                <br />
              </div>
              <div className="col-md-6">
                <label>Edit Name:</label>
                <input
                  className="form-control col-10 mx-auto"
                  type="text"
                  id="update-name-input"
                  placeholder="update-name"
                  name="name"
                  onChange={handleChange}
                  value={values.name}
                />
                <br />
              </div>

              <div className="col-md-6">
                <label>Edit Password:</label>
                <input
                  className="form-control col-10 mx-auto"
                  placeholder="Enter-Password"
                  onChange={handleChange}
                  type="password"
                  name="password"
                  id="update-password-input"
                  value={values.password}
                />
                <br />
              </div>
              <div className="col-md-6">
                <label>Edit Confirm Password:</label>
                <input
                  className="form-control col-10 mx-auto"
                  placeholder="Confirm-Password"
                  onChange={handleChange}
                  type="password"
                  name="confirmpassword"
                  id="update-confirm-password"
                  value={values.confirmpassword}
                />
                <br />
              </div>

              <div className="col-md-6 mt-1">
                <label className="form-label">Edit Gender:</label>
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
                <br />
              </div>

              <div className="text-center">
                <button
                  id="update-row-btn"
                  className="btn btn-primary mt-0"
                  type="submit"
                  onClick={updateBtn}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <br />
      <br />
      <br />
    </main>
  );
}
