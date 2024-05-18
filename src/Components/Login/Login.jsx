import React from "react";
import style from "./Login.module.css";



export default function Login() {



  return (
    <>
      <div className="container">
        <div className="py-5"></div>
        <h1 className="text-center fw-bold mb-3">Login Form</h1>
        <form className="bg-color p-3 rounded-3 w-50 m-auto">
          <div className="my-3">
            <label htmlFor="user_email">Email :</label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              className="form-control my-2"
            />
          </div>
          <div className="my-3">
            <label htmlFor="user_pass">Password :</label>
            <input
              type="password"
              id="user_pass"
              name="user_pass"
              className="form-control my-2"
            />
          </div>
          <div className="btn btn-dark w-100 mt-3">Login</div>
        </form>
      </div>
    </>
  );
}
