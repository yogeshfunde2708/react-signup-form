import React from "react";

export default function Table(props) {
  const { users = [] } = props;

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
            {users.map((user, i) => (
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
                  <button className="edit-row-btn btn btn-success"
                  // onClick={handleEditRow}
                  >
                    Edit-Input-Fields
                  </button>
                </td>
                <td>
                  <button className="delete-row-btn btn btn-danger">Delete{" "}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
