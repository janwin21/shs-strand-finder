// import { registerData } from "../../js/json-structure/register";
import RegisterForm from "./RegisterForm";
import Loading from "../loading/Loading";
import Localhost from "../../js/model/LocalHost";
import { dashboardRoute } from "../../route/routes";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import FormAuth from "../../js/model/FormAuth";
import TimeWatch from "../../js/TimeWatch";

function Register() {
  const navigate = useNavigate();

  // UML
  const [loading, load] = useState(true);

  const fetchData = async () => {
    load(true);
    const token = Localhost.sessionKey("user");

    if (token) {
      const dataD = await new FormAuth().authAccess(token);
      if (!dataD?.response?.data?.error) navigate(dashboardRoute.path);
    }

    load(false);
  };

  useEffect(() => {
    TimeWatch.cancel();
    fetchData();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <>
      {/*-- MAIN --*/}
      <main
        className="login container d-lg-flex align-items-center"
        style={{ height: "94vh" }}
      >
        <div className="row w-100 h-100 justify-content-center align-items-center">
          <section className="col-8 col-md-6">
            <h1 className="title-size poppins">SHS Strand Finder</h1>
            <p className="roboto w-md-100 my-5">
              A Web-Based Assessment Application Integrating Collaborative
              Filtering for Strand Recommendations of Manuel A. Roxas High
              School
            </p>
          </section>
          <section className="col-4 col-md-6 d-flex justify-content-end pe-0"></section>
        </div>
      </main>

      {/*-- SIDEBAR --*/}
      <section
        className="register position-absolute bg-dark end-0 d-flex justify-content-center align-items-center"
        style={{ height: "94vh" }}
      >
        <RegisterForm load={load} />
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
