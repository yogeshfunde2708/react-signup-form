import "./App.css";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top p-2">
        <div className="container-fluid">
          <a className="navbar-brand " href="/">
            Sign Up Form
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo"
            aria-controls="navbarTogglerDemo"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                aria-label="Search"
                type="search"
                placeholder="Search-By-Username"
                id="search-input"
              />
              <button
                className="btn btn-outline-success"
                type="submit"
                id="search-btn"
              >
                Search
              </button>
              <button
                className="btn btn-outline-warning"
                type="submit"
                id="clear-btn"
              >
                Clear
              </button>
            </form>
          </div>
        </div>
      </nav>
      <br />
      <br />

      <main class="mb-2 text-white overflow-auto">
        <form class="needs-validation" novalidate>
          <div class="card text-dark">
            <div class="card-body">
              <div class="card-body row g-4 ">
                <h2 class="text-center mt-3 ">Sign Up Here</h2>
                <div class="col-md-6">
                  <label for="validationCustom01" class="form-label">
                    Enter Email:
                  </label>
                  <input
                    class="form-control col-10 mx-auto "
                    placeholder="Enter-Email"
                    type="text"
                    id="email-input"
                    maxlength="30"
                    required=""
                  />{" "}
                </div>
                <div class="col-md-6">
                  <label for="validationCustom02" class="form-label">
                    Enter Username:
                  </label>
                  <input
                    class="form-control col-10 mx-auto "
                    placeholder="Enter-Username"
                    type="text"
                    id="name-input"
                    maxlength="20"
                    required=""
                  />{" "}
                </div>
                <div></div>
                <div class="col-md-6 mt-1">
                  <label for="validationCustom3" class="form-label">
                    Enter Password:
                  </label>
                  <input
                    class="form-control col-10 mx-auto "
                    placeholder="Password"
                    type="password"
                    id="password-input"
                    maxlength="15"
                    required=""
                  />{" "}
                </div>
                <div class="col-md-6 mt-1">
                  <label for="validationCustom4" class="form-label">
                    Enter Confirm Password:
                  </label>
                  <input
                    class="form-control col-10 mx-auto "
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
                    value="Male"
                    required=""
                  />{" "}
                   <label for="male">Male</label> {" "}
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="Female"
                    required=""
                  />{" "}
                   <label for="female">Female</label>
                </div>

                <div class="text-center">
                  <a
                    href="/"
                    id="add-name-btn"
                    class="btn btn-primary mt-0"
                    type="submit"
                  >
                    Sign Up
                  </a>
                </div>
              </div>
            </div>
          </div>
        </form>
        <br />
        <div class="table-responsive">
          <table id="table" class="table table-bordered overflow-auto">
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
        </div>{" "}
        <br />
        <br />
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
                <input
                  type="radio"
                  id="update-male"
                  name="gender"
                  value="Male"
                />{" "}
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
        <div className="card fixed-bottom text-center" id="footer">
          <h5 className="p-3 mb-0 text-white">Featured</h5>
        </div>
      </main>
    </>
  );
}

export default App;
