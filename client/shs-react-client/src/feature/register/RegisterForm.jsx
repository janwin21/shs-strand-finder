import { dashboardRoute } from "../../route/routes";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const navigate = useNavigate();

  const submit = (event) => {
    event.preventDefault();
    navigate(dashboardRoute.path);
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

export default RegisterForm;
