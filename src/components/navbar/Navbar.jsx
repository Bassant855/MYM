import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../Images/freshcart-logo.svg";
import userContext from "../Mycontext/userContext";

function Navbar() {
  const { token, setToken } = useContext(userContext);
  const navigate = useNavigate();

  function Logout() {
    localStorage.removeItem("userToken");
    setToken(null);
    navigate("/signIn");
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <div classNameName="div-img">
            <img src={logo} alt="logo" classNameName="w-100" />
          </div>
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
            {token ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cart">
                    Cart
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/products">
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/categories">
                    Categories
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/brands">
                    Brands
                  </Link>
                </li>
              </>
            ) : (
              ""
            )}
          </ul>
          <ul className="navbar-nav ms-auto mb-2  mb-lg-0">
            <li className="nav-item mt-2 mx-2">
              <i className="fab  mx-2 fa-facebook" />
              <i className="fab  mx-2 fa-instagram" />
              <i className="fab mx-2  fa-twitter" />
              <i className="fab mx-2  fa-whatsapp" />
            </li>

            {token ? (
              <>
                <li className="nav-item">
                  <span
                    onClick={() => Logout()}
                    className="nav-link"
                    to="/signOut"
                  >
                    Sign Out
                  </span>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/signIn">
                    Sign In
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signUp">
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
