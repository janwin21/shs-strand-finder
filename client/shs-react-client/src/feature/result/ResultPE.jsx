function ResultAssessment() {
  return (
    <>
      {/*-- PERSONAL ENGAGEMENT CONTAINER --*/}
      <section className="strand-type-container mt-5">
        <h5 className="w-100 poppins border-bottom border-dark text-uppercase fw-semibold">
          PERSONAL ENGAGEMENTS
        </h5>
        <section className="row mt-3 g-2">
          <div className="col-2">
            {/*-- PROBABILITY CARD  --*/}
            <div className="card bg-light p-2 mt-2">
              <div className="w-100" id="donutChartPersonal1"></div>
              <div className="card-body text-center">
                <h6 className="card-title poppins text-uppercase mb-3">
                  Strand Name
                </h6>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default ResultAssessment;
