import RegisterForm from "./RegisterForm";
import { useState } from "react";
import { registerData } from "../../js/json-structure/register";

function Register() {
  // FETCH
  const [data, fetchData] = useState(registerData);

  return (
    <>
      {/*-- MAIN --*/}
      <main
        className="login container d-lg-flex align-items-center"
        style={{ height: "94vh" }}
      >
        <div className="row w-100">
          <section className="col-8">
            <h1 className="title-size poppins">SHS Strand Finder</h1>
            <p className="roboto w-50 my-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </section>
          <section className="col-4 d-flex justify-content-end pe-0"></section>
        </div>
      </main>

      {/*-- SIDEBAR --*/}
      <section
        className="register position-absolute bg-dark end-0 d-flex justify-content-center align-items-center"
        style={{ height: "94vh" }}
      >
        <RegisterForm />
      </section>

      {/*-- DESIGN --*/}
      <span className="shs-design verticalOval-1 phase-1"></span>
      <span className="shs-design verticalOval-2 phase-1"></span>
      <span className="shs-design verticalOval-3 phase-1"></span>
      <span className="shs-design verticalOval-4 phase-1"></span>
    </>
  );
}

export default Register;
