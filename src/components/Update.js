import React, { useState } from "react";

export default function Update(props) {
  const { showUpdateForm} = props;

  return (
    // <>
    <main className={`mb-2 text-white overflow-auto ${showUpdateForm ? "" : "hidden"}`} >
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
                // onChange={handleChange}
                // value={updateData.name.values}
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
                // onChange={handleChange}
                // value={updateData.name.values}
              />
              <br />
            </div>

            <div className="col-md-6">
              <label>Edit Password:</label>
              <input
                className="form-control col-10 mx-auto"
                placeholder="Enter-Password"
                // onChange={handleChange}
                type="password"
                id="update-password-input"
                // value={updateData.password.values}
              />
              <br />
            </div>
            <div className="col-md-6">
              <label>Edit Confirm Password:</label>
              <input
                className="form-control col-10 mx-auto"
                placeholder="Confirm-Password"
                // onChange={handleChange}
                type="password"
                id="update-confirm-password"
                // value={updateData.confirmpassword.values}
              />
              <br />
            </div>

            <div>
              <label>Edit Gender:</label>{" "}
              <select
                className="form-select col-10 mx-auto"
                aria-label="Default select example"
                name="gender"
                // value={updateData.gender.values}
                // onChange={handleChange}
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
                // onClick={handleUpdate}
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
