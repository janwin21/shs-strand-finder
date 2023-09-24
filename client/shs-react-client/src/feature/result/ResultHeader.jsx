function ResultHeader() {
  return (
    <>
      {/*-- PANEL DISPLAY --*/}
      <header className="card mt-5">
        <div className="card-body p-5">
          <h2 className="card-title poppins">Your Assessment Result</h2>
          <p className="card-text my-4 roboto">
            Hello, email! Lorem ipsum dolor sit amet, consectetur adipisicing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/*-- HEADER ASSESSMENT RESULT --*/}
          <section className="row mt-5">
            <section className="col-6">
              <h6 className="roboto fw-semibold mb-3">
                Ranking Points by Subject
              </h6>
              <div
                className="w-100"
                id="barChartSubject"
                style={{ height: "400px" }}
              ></div>
            </section>
            <section className="col-6">
              <h6 className="roboto fw-semibold mb-3">
                Ranking Points by Strand
              </h6>
              <div
                className="w-100"
                id="barChartStrand"
                style={{ height: "400px" }}
              ></div>
            </section>
          </section>
        </div>
      </header>
    </>
  );
}

export default ResultHeader;
