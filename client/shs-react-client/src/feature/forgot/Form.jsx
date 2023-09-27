import { useNavigate } from "react-router-dom";
import { indexRoute } from "../../route/routes";
import { useState } from "react";

function Form() {
  const navigate = useNavigate();

  // UML
  const [forgotUser, setForgotUser] = useState({
    currentEmail: "user@email.com",
    newPassword: "newPassword",
  });

  const submit = (event) => {
    event.preventDefault();
    navigate(indexRoute.path);
  };

  return (
    <>
      <h1 className="header-size poppins">Reset your Password</h1>
      <p className="roboto w-50 my-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      {/*-- FORGOT PASSWORD FORM --*/}
      <form onSubmit={submit} className="w-75">
        {/*-- CURRENT EMAIL ADDRESS --*/}
        <div className="mb-4 w-100">
          <input
            type="email"
            className="form-control shs-input shadow"
            id="email"
            aria-describedby="emailHelp"
            autoComplete="off"
            placeholder="Email Address"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        {/*-- NEW PASSWORD --*/}
        <div className="mb-5 w-100">
          <input
            type="password"
            className="form-control shs-input shadow"
            id="newPassword"
            autoComplete="off"
            placeholder="New Password"
          />
        </div>

        {/*-- CONFIRM PASSWORD --*/}
        <div className="mb-5 w-100">
          <input
            type="password"
            className="form-control shs-input shadow"
            id="confirmNewPassword"
            autoComplete="off"
            placeholder="Confirm New Password"
          />
        </div>
        <button
          type="submit"
          className="btn btn-dark fs-6 px-4 text-uppercase text-light fw-semibold fs-6"
        >
          RESET
        </button>
      </form>
    </>
  );
}

export default Form;
