import { Link } from "react-router-dom";
import { dashboardRoute } from "../../route/routes";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { action } from "../../redux/action";
import { useState } from "react";
import { forgotRoute } from "../../route/routes";
import Login from "../../js/model/Login";
import Localhost from "../../js/model/LocalHost";

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (user) => dispatch({ type: action.LOGIN_USER, user }),
  };
};

function LoginForm({ loginUser }) {
  const navigate = useNavigate();

  // UML
  const [validateUser, setValidateUser] = useState({
    email: "user@email.com",
    password: "password",
  });

  const submit = async (event) => {
    event.preventDefault();
    const login = new Login();
    const err = await login.auth(validateUser);

    if (err?.error) {
      console.log(err.error);
    } else {
      loginUser(validateUser);
      Localhost.session("user", err.token);
      navigate(dashboardRoute.path);
    }
  };

  return (
    <>
      {/*-- LOGIN FORM --*/}
      <form onSubmit={submit} className="w-75">
        {/*-- EMAIL ADDRESS --*/}
        <div className="mb-4 w-100">
          <label
            htmlFor="email"
            className="form-label mb-3 roboto fs-4 text-info"
          >
            Email Address
          </label>
          <input
            type="email"
            className="form-control shs-input shadow"
            id="email"
            aria-describedby="emailHelp"
            autoComplete="off"
            onChange={(ev) => {
              setValidateUser({ ...validateUser, email: ev.target.value });
            }}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        {/*-- PASSWORD --*/}
        <div className="mb-2 w-100">
          <label
            htmlFor="password"
            className="form-label mb-3 roboto fs-4 text-info"
          >
            Password
          </label>
          <input
            type="password"
            className="form-control shs-input shadow"
            id="password"
            autoComplete="off"
            onChange={(ev) => {
              setValidateUser({ ...validateUser, password: ev.target.value });
            }}
          />
        </div>

        <Link
          to={forgotRoute.path}
          className="nav-link roboto mb-4"
          style={{ cursor: "pointer" }}
        >
          Forgot password? click here.
        </Link>
        <button
          type="submit"
          className="btn btn-primary fs-6 px-4 text-uppercase text-light fw-semibold fs-6"
        >
          SUBMIT
        </button>
      </form>
    </>
  );
}

export default connect(null, mapDispatchToProps)(LoginForm);
