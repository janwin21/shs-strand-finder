import Localhost from "../../../js/model/LocalHost";

function SidebarPendingSubject({ pendingSubject }) {
  return (
    <>
      {/*-- PENDING SUBJECT CARD --*/}
      <div
        className="card bg-dark rounded-0 border-bottom border-light border-top-0 border-start-0 border-end-0 p-4"
        style={{ maxWidth: "540px" }}
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={Localhost.path() + pendingSubject.imagePath}
              className="img-fluid rounded-0"
              alt="pending subject image"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h6 className="card-title poppins text-light text-uppercase mb-3">
                {pendingSubject.name}
              </h6>
              <a className="nav-link d-inline" href="#">
                <button className="btn btn-secondary roboto px-4 fs-6">
                  TAKE ASSESSMENT
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SidebarPendingSubject;
