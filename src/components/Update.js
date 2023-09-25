import React, { useState } from "react";
import Axios from "axios";

export default function Update(props,) {
  const { showUpdateForm,user,onUpdate} = props;
  const [formData, setFormData] = useState({
    ID: user.ID,
    name: user.name,
    email: user.email,
    gender: user.gender,
    password: user.password,
    confirmpassword: user.confirmpassword,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleUpdate = () => {
    Axios.patch(`http://localhost:5000/update`).then(
      (response) => {
        if (response && response.data) {
          onUpdate(formData);
        }
      }
    );
  };
  return (
    // <>
    <main
      className={`mb-2 text-white overflow-auto ${
        showUpdateForm ? "" : "hidden"
      }`}
    >
      {/* <form > */}
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
                onChange={handleChange}
                value={formData.email}
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
                onChange={handleChange}
                value={formData.name}
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
                id="update-password-input"
                value={formData.password}
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
                id="update-confirm-password"
                value={formData.confirmpassword}
              />
              <br />
            </div>

            <div className="col-md-6 mt-1">
              <label className="form-label">Edit Gender:</label>
              <select
                className="form-select col-10 mx-auto float-left"
                aria-label="Default select example"
                name="gender"
                value={formData.gender}
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
                onClick={handleUpdate}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* </form> */}
      <br />
      <br />
      <br />
    </main>
    //  </>
  );
}
