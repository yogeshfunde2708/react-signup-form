import React from 'react'
// import Axios from "axios";

export default function Signup() {

    
  //     const [email, setEmail] = useState("");
  //   const [name, setName] = useState("");
  //   const [gender, setGender] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [confirmpassword, setConfirmPassword] = useState("");
  //   const [insertRowIntoTable, setInsertRowIntoTable] = useState("");

  //   const addBtn = (e) => {
  //     e.preventDefault();
  //     Axios.post("http://localhost:5000/insert", {
  //       email: email,
  //       name: name,
  //       gender:gender,
  //       password: password,
  //       confirmpassword: confirmpassword
  //     }).then((response) => response.json())
  //     .then((data) => setInsertRowIntoTable(data["data"]));
  //   }

  
  return (
    <main className="mb-2 text-white overflow-auto">
    <form className="needs-validation" novalidate>
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
                // onChange={(e) => {setEmail(e.target.value)}}
                placeholder="Enter-Email"
                type="text"
                id="email-input"
                maxlength="30"
                required=""
              />{" "}
            </div>
            <div className="col-md-6">
              <label htmlFor="validationCustom02" className="form-label">
                Enter Username:
              </label>
              <input
                className="form-control col-10 mx-auto "
                // onChange={(e) => {setName(e.target.value)}}
                placeholder="Enter-Username"
                type="text"
                id="name-input"
                maxlength="20"
                required=""
              />{" "}
            </div>
            <div></div>
            <div className="col-md-6 mt-1">
              <label htmlFor="validationCustom3" className="form-label">
                Enter Password:
              </label>
              <input
                className="form-control col-10 mx-auto "
                // onChange={(e) => {setPassword(e.target.value)}}
                placeholder="Password"
                type="password"
                id="password-input"
                maxlength="15"
                required=""
              />{" "}
            </div>
            <div className="col-md-6 mt-1">
              <label htmlFor="validationCustom4" className="form-label">
                Enter Confirm Password:
              </label>
              <input
                className="form-control col-10 mx-auto "
                // onChange={(e) => {setConfirmPassword(e.target.value)}}
                placeholder="Confirm-Password"
                type="password"
                id="confirm-password-input"
                maxlength="15"
                required=""
              />{" "}
            </div>

            <div>
              <label>Select gender:</label> {" "}
              <input
                type="radio"
                id="male"
                name="gender"
                // onChange={(e) => {setGender(e.target.value)}}
                value="Male"
                required=""
              />{" "}
               <label htmlFor="male">Male</label> {" "}
              <input
                type="radio"
                id="female"
                // onChange={(e) => {setGender(e.target.value)}}
                name="gender"
                value="Female"
                required=""
              />{" "}
               <label htmlFor="female">Female</label>
            </div>

            <div className="text-center">
              <a
                href="/"
                id="add-name-btn"
                className="btn btn-primary mt-0"
                type="submit"
                // onClick={addBtn}
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </form>
  </main>
  )
}
