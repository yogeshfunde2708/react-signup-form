import Axios from "axios";
import React, { useState } from "react";
import Update from "./Update";

export default function Table(props) {
  const { users = [], getUsers} = props;
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  

  const updateForm = (users) => {
    setSelectedUser(users);
    setShowUpdateForm(true);
  };
 
  const updateBtn= ()=>{
    setShowUpdateForm(false);
  }

  const deleteBtn = (ID) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirmDelete) {
      Axios.delete(`http://localhost:5000/delete/${ID}`).then((response) => {
        if (response && response.data) {
          getUsers();
        }
      });
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
              (user, i) => (
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
                      onClick={()=>updateForm(user)}
                    >
                      Edit-Input-Fields
                    </button>
                  </td>
                  <td>
                    <button
                      className="delete-row-btn btn btn-danger"
                      onClick={() => deleteBtn(user.ID)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>{" "}
        <br></br>
        <br></br>
        {showUpdateForm ? <Update user={selectedUser} onUpdate={updateBtn} />: null}
      </div>
      {/* {showUpdateForm ? <Update user={selectedUser} onUpdate={updateBtn} />: null} */}
    </main>
  );
}
