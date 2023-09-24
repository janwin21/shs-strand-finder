import { action } from "../../redux/action";
import { connect } from "react-redux";
import { modalType } from "../modal/modalType";
import {
  accessRoute,
  formStrandTypeRoute,
  formStrandRoute,
  formSubjectTypeRoute,
  formSubjectRoute,
  formPersonalEngagementRoute,
  formAssessmentRoute,
} from "../../route/routes";
import SidebarButton from "./component/SidebarButton";

function ResultAssessment() {
  return (
    <>
      {/*-- ASSESSMENT SCORE CONTAINER --*/}
      <section className="strand-type-container position-relative mt-5">
        <h5 className="w-100 poppins border-bottom border-dark text-uppercase fw-semibold">
          ASSESSMENT SCORES
        </h5>
        <section className="row mt-3 g-2">
          {/*-- USE MODULUS FOR ORGANIZATION --*/}
          {/*-- COL-1 --*/}
          <section className="col-2 g-2">
            {/*-- SUBJECT CARD  --*/}
            <div className="card bg-light p-2 mt-2">
              <div className="w-100" id="donutChartAssessment1"></div>
              <div className="card-body text-center">
                <h6 className="card-title poppins text-uppercase mb-3">
                  Subject Name
                </h6>
                <p className="card-text mb-0">
                  score: <strong>100</strong> / 100
                </p>
                <p className="card-text mb-0">duration: 1 hr</p>
                <p className="card-text mb-0">leave count: 3</p>
              </div>
            </div>
          </section>
          {/*-- COL-2 --*/}
          <section className="col-2 g-2"></section>
          {/*-- COL-3 --*/}
          <section className="col-2 g-2"></section>
          {/*-- COL-4 --*/}
          <section className="col-2 g-2"></section>
          {/*-- COL-5 --*/}
          <section className="col-2 g-2"></section>
          {/*-- COL-6 --*/}
          <section className="col-2 g-2"></section>
        </section>
      </section>
    </>
  );
}

export default ResultAssessment;
