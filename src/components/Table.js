import Axios from "axios";
import React, { useState } from "react";
// import Update from "./Update";

export default function Table(props) {
  const { users = [] } = props;
  const [updateVisible, setUpdateVisible] = useState(false);

  const toggleUpdateVisibility = () => {
    setUpdateVisible(!updateVisible);
  };
  const deleteBtn = (ID) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirmDelete) {
      Axios.delete(`http://localhost:5000/delete/${ID}`)
      .then((response) => {
        if (response && response.data.data) {
         
          window.location.reload();
        }
      })
   
    }
  };

  return (
    <main className="mb-2 text-white overflow-auto">
      <div className="table-responsive">
        <table id="table" className="table table-bordered overflow-auto">
          <thead>
            <th>Sr No.</th>
            <th>ID</th>
            <th>Email</th>
            <th>Username</th>
            <th>Gender</th>
            <th>Password</th>
            <th>Confirm-Password</th>
            <th>Date-Added</th>
            <th>Edit-Input-Fields</th>
            <th>Delete</th>
          </thead>
          <tbody>
            {users.map(
              (user, i, ID, email, name, gender, password, confirmpassword) => (
                <tr>
                  <td>{i + 1}</td>
                  <td>{user.ID}</td>
                  <td>{user.email}</td>
                  <td>{user.name}</td>
                  <td>{user.gender}</td>
                  <td>{user.password}</td>
                  <td>{user.confirmpassword}</td>
                  <td>{new Date(user.date_added).toLocaleString()}</td>
                  <td>
                    <button
                      className="edit-row-btn btn btn-success"
                      data-id={ID}
                      data-email={email}
                      data-name={name}
                      data-gender={gender}
                      data-password={password}
                      data-confirmpassword={confirmpassword}
                      onClick={toggleUpdateVisibility}
                    >
                      Edit-Input-Fields
                    </button>
                  </td>
                  <td>
                    <button
                      className="delete-row-btn btn btn-danger"
                      // users-id={user.ID}
                      onClick={() => deleteBtn(user.ID)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}
