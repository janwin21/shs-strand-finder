import { dashboardRoute } from "../../route/routes";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { action } from "../../redux/action";
import { useState } from "react";
import Register from "../../js/model/Register";

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (user) => dispatch({ type: action.LOGIN_USER, user }),
  };
};

function RegisterForm({ loginUser }) {
  const navigate = useNavigate();

  // UML
  const [newUser, setNewUser] = useState({
    email: "user@email.com",
    password: "password",
    confirmPassword: "password",
  });

  const submit = async (event) => {
    event.preventDefault();
    const register = new Register();

    loginUser({ ...newUser });
    const err = await register.register(newUser);

    if (err?.error) {
      console.log(err.error);
    } else {
      navigate(dashboardRoute.path);
    }
  };

  return (
    <>
      {/*-- REGISTER FORM --*/}
      <form
        onSubmit={submit}
        className="w-75 d-flex flex-column justify-content-center align-items-center p-5"
      >
        <h5 className="poppins text-light text-uppercase mb-5">
          REGISTRATION FORM
        </h5>

        {/*-- EMAIL ADDRESS --*/}
        <div className="mb-1 w-100">
          <label
            htmlFor="email"
            className="form-label mb-3 roboto fs-5 text-light"
          >
            Email Address
          </label>
          <input
            type="email"
            className="form-control shs-input register-input shadow"
            id="email"
            autoComplete="off"
            onChange={(ev) => {
              setNewUser({ ...newUser, email: ev.target.value });
            }}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        {/*-- PASSWORD --*/}
        <div className="mb-4 w-100">
          <label
            htmlFor="password"
            className="form-label mb-3 roboto fs-5 text-light"
          >
            Password
          </label>
          <input
            type="text"
            className="form-control shs-input register-input shadow"
            id="password"
            autoComplete="off"
            onChange={(ev) => {
              setNewUser({ ...newUser, password: ev.target.value });
            }}
          />
        </div>

        {/*-- CONFIRM PASSWORD --*/}
        <div className="mb-5 w-100">
          <label
            htmlFor="confirmPassword"
            className="form-label mb-3 roboto fs-5 text-light"
          >
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control shs-input register-input shadow"
            id="confirmPassword"
            autoComplete="off"
            onChange={(ev) => {
              setNewUser({ ...newUser, confirmPassword: ev.target.value });
            }}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary mt-5 fs-6 px-4 text-uppercase text-light fw-semibold fs-6"
        >
          CREATE NEW ACCOUNT
        </button>
      </form>
    </>
  );
}

export default connect(null, mapDispatchToProps)(RegisterForm);
