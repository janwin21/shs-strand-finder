function DashboardStrandType() {
  return (
    <>
      {/*-- STRAND TYPE CONTAINER --*/}
      <section className="strand-type-container position-relative mt-5">
        <a className="nav-link" href="#">
          <i className="fa-solid fa-rectangle-xmark text-danger fs-3 position-absolute top-0 end-0"></i>
        </a>
        <h5 className="w-100 poppins border-bottom border-dark text-uppercase fw-semibold">
          STRAND TYPE NAME
        </h5>
        <section className="row">
          <div
            className="card col-2 position-relative text-bg-dark p-0 m-3"
            style={{ height: "350px" }}
          >
            <img
              src="../asset/strand/strand1.jpg"
              className="card-img h-100"
              alt="strand img"
            />
            <a className="nav-link" href="#">
              <i className="fa-solid fa-rectangle-xmark text-light fs-3 position-absolute top-0 end-0 m-2"></i>
            </a>
            <div className="bg-dark position-absolute p-2 bottom-0 w-100">
              <h5 className="card-title roboto">Strand Name</h5>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default DashboardStrandType;
