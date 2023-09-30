import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  let handleOnChange = (event) => {
    props.setSearch(event.target.value);
    console.log(event.target.value);
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-body-primary sticky-top"
        style={{ backgroundColor: " #6499E9" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Newsify
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  id="Home"
                  className="nav-link"
                  aria-current="page"
                  to="/general"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link id="Business" className="nav-link" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  id="Entertainment"
                  className="nav-link"
                  to="/entertainment"
                >
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link id="Health" className="nav-link" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link id="Science" className="nav-link" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link id="Sports" className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link id="technology" className="nav-link" to="/technology">
                  Technology
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                onChange={handleOnChange}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
