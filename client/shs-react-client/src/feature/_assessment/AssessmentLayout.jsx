import AssessmentPanel from "./AssessmentPanel";
import PEResult from "../layout/PEResult";
import DashboardSidebar from "../dashboard/DashboardSidebar";

function AssessmentNoSidebar({
  data,
  choice,
  currentQuestion,
  select,
  submit,
  currentIndex,
}) {
  return (
    <>
      {/*-- NO SIDEBAR --*/}
      <div className="container">
        <div className="row">
          <section className="scrollable-section col-12 pb-4">
            <AssessmentPanel
              user={data.user}
              choice={choice}
              subject={data.subject}
              question={currentQuestion}
              cb={select}
            />
            {choice ? (
              <>
                {/*-- NEXT --*/}
                {currentIndex < data.questions.length - 1 ? (
                  <button
                    className="btn btn-dark float-end roboto px-4"
                    onClick={submit}
                  >
                    NEXT
                  </button>
                ) : (
                  <>
                    {data?.pendingSubjects.length != 0 ? (
                      <button
                        className="btn btn-primary float-end text-light roboto px-4"
                        onClick={(ev) => submit(ev, true)}
                      >
                        SUBMIT & TAKE NEXT ASSESSMENT
                      </button>
                    ) : (
                      <></>
                    )}
                    <button
                      className="btn btn-dark float-end me-2 roboto px-4"
                      onClick={submit}
                    >
                      SUBMIT
                    </button>
                  </>
                )}
              </>
            ) : (
              <></>
            )}
          </section>
        </div>
      </div>
    </>
  );
}

function AssessmentWithSidebar({
  viewablePE,
  data,
  choice,
  currentQuestion,
  select,
  submit,
  currentIndex,
  selectedStrand,
}) {
  return (
    <>
      {/*-- W/ SIDEBAR --*/}
      <div className={`row ${viewablePE ? "bg-dark" : ""} h-100`}>
        <section
          className={`scrollable-section col-12 col-md-6 col-lg-9 h-100 position-relative ${
            !viewablePE ? "auto-overflow pb-4 pb-4 px-3 px-md-4 px-lg-5" : "p-0"
          }`}
        >
          {!viewablePE ? (
            <>
              {/*-- NO SIDEBAR --*/}
              <div className="container">
                <div className="row">
                  <section className=" col-12 pb-4">
                    <AssessmentPanel
                      user={data.user}
                      choice={choice}
                      subject={data.subject}
                      question={currentQuestion}
                      cb={select}
                    />
                    {choice ? (
                      <>
                        {/*-- NEXT --*/}
                        {currentIndex < data.questions.length - 1 ? (
                          <button
                            className="btn btn-dark float-end roboto px-4"
                            onClick={submit}
                          >
                            NEXT
                          </button>
                        ) : (
                          <>
                            {data?.pendingSubjects.length != 0 ? (
                              <button
                                className="btn btn-primary float-end text-light roboto px-4"
                                onClick={(ev) => submit(ev, true)}
                              >
                                SUBMIT & TAKE NEXT ASSESSMENT
                              </button>
                            ) : (
                              <></>
                            )}
                            <button
                              className="btn btn-dark float-end me-2 roboto px-4"
                              onClick={submit}
                            >
                              SUBMIT
                            </button>
                          </>
                        )}
                      </>
                    ) : (
                      <></>
                    )}
                  </section>
                </div>
              </div>
            </>
          ) : (
            <>
              <PEResult
                preferredStrand={data.preferredStrand}
                personalEngagements={data.personalEngagements}
              />
              ;
            </>
          )}
        </section>
        <DashboardSidebar
          user={data.user}
          selectedStrand={selectedStrand}
          subjects={data.subjects}
          pendingSubjects={data.pendingSubjects}
        />
      </div>
    </>
  );
}

export { AssessmentNoSidebar, AssessmentWithSidebar };
