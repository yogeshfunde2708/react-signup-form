import React from "react";
// import Axios from "axios";

export default function Update(props) {
  // const [updateData, handleUpdate] = () => {
  //   const {
  //     id,
  //     name,
  //     email,
  //     gender,
  //     password,
  //     confirmPassword,
  //   } = updateData;

  //   if (!name || !email || !gender || !password || !confirmPassword) {
  //     alert('Please fill in all fields');
  //     return;
  //   }

  //   if (password !== confirmPassword) {
  //     alert('Password did not match, please try again');
  //     return;
  //   }
  //   Axios.fetch('http://localhost:5000/update', {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       id: id,
  //       name: name,
  //       email: email,
  //       gender: gender,
  //       password: password,
  //       confirmpassword: confirmPassword,
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data.success) {
  //         window.location.reload();
  //       }
  //     });
  // };
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
                // onChange={handleChange}
                id="update-email-input"
                placeholder="update-email"
                // value={updateData.email}
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
                // value={updateData.name}
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
                // value={updateData.password}

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
                // value={updateData.confirmpassword}
              />
              <br />
            </div>

            <div>
              <label>Edit Gender:</label>{" "}
              <select
                  className="form-select col-10 mx-auto"
                  aria-label="Default select example"
                  name="gender"
                  // value={updateData.gender}
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
      <br />
      <br />
      <br />
    </main>
  );
}
