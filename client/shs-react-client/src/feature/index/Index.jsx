import LoginForm from "./LoginForm";
import login1 from "../../asset/login/login1.png";
import login2 from "../../asset/login/login2.png";
import { useState, useEffect } from "react";
import { loginData } from "../../js/json-structure/login";
import Loading from "../loading/Loading";

function Index() {
  // FETCH
  const [data, fetchData] = useState(loginData);
  const [loading, load] = useState(true);

  useEffect(() => {
    load(true);
    load(false);
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
        <div className="row w-100">
          <section className="col-8">
            <h1 className="title-size poppins">SHS Strand Finder</h1>
            <p className="roboto w-50 my-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <LoginForm load={load} />
          </section>
          <section className="col-4 d-none d-lg-flex justify-content-end pe-0">
            {/*-- IMAGE DESIGN --*/}
            <div className="login-img-1 position-relative">
              <img
                className="w-100 h-100 shadow"
                src={login1}
                alt="login image 1"
              />
              <span className="position-absolute">
                <img
                  className="w-100 h-100 shadow"
                  src={login2}
                  alt="login image 2"
                />
              </span>
            </div>
          </section>
        </div>
      </main>

      {/*-- DESIGN --*/}
      <span className="shs-design verticalOval-1"></span>
      <span className="shs-design verticalOval-2"></span>
      <span className="shs-design verticalOval-3"></span>
      <span className="shs-design verticalOval-4"></span>
      <span className="shs-design verticalOval-6"></span>
      <span className="shs-design verticalOval-5"></span>
    </>
  );
}

export default Index;
