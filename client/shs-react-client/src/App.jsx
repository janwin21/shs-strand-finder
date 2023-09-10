function App() {
  return (
    <>
      {/*-- NAV SECTION --*/}
      <nav
        className="navbar navbar-expand-lg grd-pri-sec"
        style={{ height: "6vh" }}
      >
        <div className="container">
          <a className="navbar-brand poppins text-light fs-5" href="#">
            SHS Strand Finder
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-lg-flex justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav d-lg-flex align-items-center">
              <a
                className="nav-link roboto text-uppercase text-light fw-semibold fs-6"
                href="#"
              >
                LOGIN
              </a>
              <a className="nav-link ms-lg-3" href="#">
                <button className="btn btn-light roboto px-4">Register</button>
              </a>
            </div>
          </div>
        </div>
      </nav>

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

            {/*-- LOGIN FORM --*/}
            <form className="w-75">
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
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>

              {/*-- PASSWORD --*/}
              <div className="mb-5 w-100">
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
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary fs-6 px-4 text-uppercase text-light fw-semibold fs-6"
              >
                SUBMIT
              </button>
            </form>
          </section>
          <section className="col-4 d-flex justify-content-end pe-0">
            {/*-- IMAGE DESIGN --*/}
            <div className="login-img-1 position-relative">
              <img
                className="w-100 h-100 shadow"
                src="../asset/login/login1.png"
                alt="login image 1"
              />
              <span className="position-absolute">
                <img
                  className="w-100 h-100 shadow"
                  src="../asset/login/login2.png"
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

export default App;
