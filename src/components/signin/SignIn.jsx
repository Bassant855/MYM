import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import userContext from "../Mycontext/userContext";

function SignIn() {
  const { token, setToken } = useContext(userContext);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(null);
  const navigate = useNavigate();
  const handleSignIn = async (obj) => {
    setIsLoading(true);
    try {
      const { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signin",
        obj
      );
      navigate("/");
      if (data.token) setToken(data.token);
      localStorage.setItem("userToken", data.token);
    } catch (err) {
      setErr(err.response.data.message);
    }
    setIsLoading(false);
    // console.log(token);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (obj) => handleSignIn(obj),
  });
  return (
    <div className="container w-75 mt-5">
      <div className=" d-flex flex-column justify-content-center align-items-center align-content-center ">
        {err && (
          <div className="alert text-center py-1 w-75 alert-danger">{err}</div>
        )}
        <form
          className="mt-1 mb-3  container w-75 d-flex flex-column"
          onSubmit={formik.handleSubmit}
        >
          <div className="fs-4 fw-bold mb-3 ">Sign In :</div>
          <div className="d-flex flex-column gap-1 mt-2 ">
            <label className="form-label" htmlFor="firstName">
              Email :
            </label>
            <input
              type="text"
              name="email"
              className="form-control"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </div>
          <div className="d-flex flex-column gap-1 mt-3 ">
            <label className="form-label" htmlFor="pass">
              Password :
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </div>
          <div className="d-flex ms-auto mt-3 align-content-center">
            {!isLoading ? (
              <button
                type="submit"
                disabled={!(formik.isValid && formik.dirty)}
                className="btn-1 py-2 my-3 ms-auto rounded-4"
              >
                Sign in
              </button>
            ) : (
              <button
                type="button"
                className="btn-1 px-1 py-2 my-3 ms-auto rounded-4 "
              >
                <i className="fas fa-spinner fa-spin "></i>
              </button>
            )}
            <Link
              className="btn btn-1 px-2 fs-6 mx-1 my-3 rounded-4"
              to="/signUp"
            >
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
