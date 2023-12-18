import ResultHeader from "./ResultHeader";
import ResultAssessment from "./ResultAssessment";
import ResultPE from "./ResultPE";
import PEResult from "../layout/PEResult";
import ResultSidebar from "./ResultSidebar";
import { useEffect, useState } from "react";

function ResultNoSidebar({ data }) {
  const [subjectTypeResultsD, setSubjectTypeResultsD] = useState(
    data?.subjectTypeResults
  );
  const [subjectTypeResults, setSubjectTypeResults] = useState(
    data?.subjectTypeResults
  );

  useEffect(() => {
    setSubjectTypeResultsD(data?.subjectTypeResults);
    setSubjectTypeResults(data?.subjectTypeResults);
  }, []);

  useEffect(() => {
    console.log(subjectTypeResults);
  }, [subjectTypeResults]);

  return (
    <>
      {/*-- NO SIDEBAR --*/}
      <div className="container">
        <div className="row">
          <section className="col-12 pb-4">
            {data ? (
              <ResultHeader
                subjects={data.orderedSubjects}
                strands={data.orderedFinalResult}
                subjectTypeResults={subjectTypeResultsD}
                setSubjectTypeResults={setSubjectTypeResults}
              />
            ) : (
              <></>
            )}
            <ResultAssessment subjectTypes={subjectTypeResults} />
            <ResultPE strands={data?.peStrandResults} />
          </section>
        </div>
      </div>
    </>
  );
}

function ResultWithSidebar({ viewablePE, data }) {
  const [subjectTypeResultsD, setSubjectTypeResultsD] = useState(
    data?.subjectTypeResults
  );
  const [subjectTypeResults, setSubjectTypeResults] = useState(
    data?.subjectTypeResults
  );

  useEffect(() => {
    setSubjectTypeResultsD(data?.subjectTypeResults);
    setSubjectTypeResults(data?.subjectTypeResults);
  }, []);

  useEffect(() => {
    console.log(subjectTypeResults);
  }, [subjectTypeResults]);

  return (
    <>
      {/*-- W/ SIDEBAR --*/}
      <div className={`row ${viewablePE ? "bg-dark" : ""} h-100`}>
        <section
          className={`col-12 col-md-6 col-lg-9 h-100 position-relative ${
            !viewablePE ? "auto-overflow pb-4 pb-4 px-3 px-md-4 px-lg-5" : "p-0"
          }`}
        >
          {!viewablePE ? (
            <>
              {data ? (
                <ResultHeader
                  subjects={data.orderedSubjects}
                  strands={data.orderedFinalResult}
                  subjectTypeResults={subjectTypeResultsD}
                  setSubjectTypeResults={setSubjectTypeResults}
                />
              ) : (
                <></>
              )}
              <ResultAssessment subjectTypes={subjectTypeResults} />
              <ResultPE strands={data?.peStrandResults} />
            </>
          ) : (
            <>
              <PEResult
                preferredStrand={data?.preferredStrand}
                personalEngagements={data?.personalEngagements}
              />
              ;
            </>
          )}
        </section>
        <ResultSidebar
          user={data?.user}
          subjects={data?.subjects}
          predictedStrand={data?.predictedStrand}
        />
      </div>
    </>
  );
}

export { ResultNoSidebar, ResultWithSidebar };
