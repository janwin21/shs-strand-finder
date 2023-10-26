import { useNavigate } from "react-router-dom";
import { indexRoute } from "../../route/routes";
import { useState } from "react";
import Forgot from "../../js/model/Forgot";

function Form() {
  const navigate = useNavigate();

  // UML
  const [forgotUser, setForgotUser] = useState({
    email: "user@email.com",
    password: "newPassword",
    confirmPassword: "newPassword",
  });

  const submit = async (event) => {
    event.preventDefault();
    const forgot = new Forgot();
    const error = await forgot.forgot(forgotUser);

    if (error?.response?.data?.error) {
      console.log(error?.response?.data?.error);
    } else {
      console.log(error);
      navigate(indexRoute.path);
    }
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
            onChange={(ev) => {
              setForgotUser({ ...forgotUser, email: ev.target.value });
            }}
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
            onChange={(ev) => {
              setForgotUser({ ...forgotUser, password: ev.target.value });
            }}
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
            onChange={(ev) => {
              setForgotUser({
                ...forgotUser,
                confirmPassword: ev.target.value,
              });
            }}
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
