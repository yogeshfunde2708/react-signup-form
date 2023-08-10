import React from "react";

export default function Table() {
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
          <tbody></tbody>
        </table>
      </div>
    </main>
  );
}
