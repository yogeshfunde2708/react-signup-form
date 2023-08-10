import React from "react";

export default function Update() {
  return (
    <main className="mb-2 text-white overflow-auto">
      <div className="card text-dark row g-3" hidden id="update-row">
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
              />
              <br />
            </div>

            <div className="col-md-6">
              <label>Edit Password:</label>
              <input
                className="form-control col-10 mx-auto"
                placeholder="Enter-Password"
                type="password"
                id="update-password-input"
              />
              <br />
            </div>
            <div className="col-md-6">
              <label>Edit Confirm Password:</label>
              <input
                className="form-control col-10 mx-auto"
                placeholder="Confirm-Password"
                type="password"
                id="update-confirm-password"
              />
              <br />
            </div>

            <div>
              <label>Edit Gender:</label>{" "}
              <input type="radio" id="update-male" name="gender" value="Male" />{" "}
              <label htmlFor="male">Male</label>{" "}
              <input
                type="radio"
                id="update-female"
                name="gender"
                value="Female"
              />{" "}
              <label htmlFor="female">Female</label>
              <br />
            </div>

            <div className="text-center">
              <a href="/" id="update-row-btn" className="btn btn-primary">
                Update
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </main>
  );
}
