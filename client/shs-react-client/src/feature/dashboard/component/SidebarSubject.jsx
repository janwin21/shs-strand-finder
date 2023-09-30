function SidebarSubject({ subject }) {
  return (
    <>
      {/*-- SUBJECT CARD --*/}
      <div
        className="card bg-dark rounded-0 border-bottom border-light border-top-0 border-start-0 border-end-0 p-4"
        style={{ maxWidth: "540px" }}
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={subject.imagePath}
              className="img-fluid rounded-0"
              alt="subject image"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h6 className="card-title poppins text-light text-uppercase mb-3">
                {subject.name}
              </h6>
              <p className="card-text text-light mb-0">
                score: <strong>{subject.score}</strong> / {subject.totalScore}
              </p>
              <p className="card-text text-light mb-0">
                duration: {subject.duration}
              </p>
              <p className="card-text text-light mb-0">leave count: 3</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SidebarSubject;
