import { useEffect, useState } from "react";
import { subjectData } from "../../../js/json-structure/form/subject";
import FormRadioBtn from "../component/FormRadioBtn";
import question1 from "../../../asset/assessment/question1.jpg";
import answer1 from "../../../asset/answer/answer1.jpg";
import $ from "jquery";

function Form() {
  // UML
  const [question, setQuestion] = useState({
    subjectID: "subject123",
    question: "This is a question?",
    questionImage: null,
    answerKeys: [
      {
        value: "This is answer A",
        image: null,
        correct: true,
        // (server) questionID: string
      },
    ],
  });

  const [uploadBtn, setUploadBtn] = useState(null);

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setQuestion({ ...question, questionImage: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileInputChangeAnswer = (e, i) => {
    const file = e.target.files[0];
    const tempAnswerKeys = question.answerKeys;

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        tempAnswerKeys[i].image = e.target.result;
        setQuestion({ ...question, answerKeys: tempAnswerKeys });
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    console.log("RELOAD SUBJECT : ", subjectData);

    $(() => {
      setUploadBtn($("#uploadBtn"));
    });
  }, []);

  const submit = (ev) => {
    ev.preventDefault();
    console.log("ADD NEW STRAND : ", question);
  };

  return (
    <>
      {/*-- FORM CONTAINER --*/}
      <section className="strand-type-container position-relative mt-5">
        <h5 className="w-100 poppins border-bottom border-dark text-uppercase fw-semibold">
          FILL IN THE BLANKS
        </h5>
        <div className="row">
          <section className="col-3">
            <img
              className="w-100 rounded-top"
              src={question.questionImage ? question.questionImage : question1}
              alt="file img input"
            />
            <button
              onClick={() => uploadBtn.click()}
              className="btn btn-dark w-100 fs-6 px-4 rounded-0 rounded-bottom text-uppercase text-light fw-semibold fs-6"
            >
              UPLOAD FILE
            </button>
          </section>
          <section className="col-9">
            {/*-- ASSESSMENT FORM --*/}
            <form onSubmit={submit} className="w-100">
              {/*-- QUESTION --*/}
              <div className="mb-4 w-100">
                <textarea
                  className="form-control shs-textarea shadow w-100"
                  id="text"
                  placeholder="Type your question here"
                  onChange={(ev) => {
                    setQuestion({ ...question, question: ev.target.value });
                  }}
                ></textarea>
              </div>
              {/*-- IMAGE FILE --*/}
              <input
                className="d-none"
                type="file"
                id="uploadBtn"
                accept="image/*"
                onChange={handleFileInputChange}
              />
              <h5 className="w-100 poppins border-bottom border-dark text-uppercase fw-semibold">
                SELECT SUBJECT
              </h5>
              {/*-- SUBJECT SELECTION --*/}
              <div
                className="btn-group d-flex flex-row flex-wrap mb-4"
                role="group"
                aria-label="Basic checkbox toggle button group"
              >
                {subjectData.subjects.map((subject, i) => {
                  return (
                    <FormRadioBtn
                      key={i}
                      onChangeCb={(ev) => {
                        setQuestion({ ...question, subjectID: ev.target.id });
                      }}
                      name={"subject"}
                      subjectType={subject}
                    />
                  );
                })}
              </div>

              {/*-- ANSWER KEY CONTAINER --*/}
              {question.answerKeys.map((answerKey, i) => {
                const uploadBtnId = `uploadBtn${i}`;

                return (
                  <section key={answerKey.id} className="row mt-5">
                    <section className="col-3">
                      <img
                        className="w-100 rounded-top"
                        src={answerKey.image ? answerKey.image : answer1}
                        alt="file img input"
                      />
                      <button
                        type="submit"
                        className="btn btn-dark w-100 fs-6 px-4 rounded-0 rounded-bottom text-uppercase text-light fw-semibold fs-6"
                        onClick={() => {
                          $(() => {
                            $("#" + uploadBtnId).click();
                          });
                        }}
                      >
                        UPLOAD FILE
                      </button>
                    </section>
                    <section className="col-9">
                      {/*-- IMAGE FILE --*/}
                      <input
                        className="d-none"
                        type="file"
                        id={uploadBtnId}
                        accept="image/*"
                        onChange={(ev) => handleFileInputChangeAnswer(ev, i)}
                      />
                      <h5 className="w-100 poppins position-relative border-bottom border-dark text-uppercase fw-semibold">
                        ANSWER KEY NO. {i + 1}
                        <a
                          onClick={(ev) => {
                            const tempAnswerKeys = question.answerKeys;
                            tempAnswerKeys.splice(i, 1);
                            setQuestion({
                              ...question,
                              answerKeys: tempAnswerKeys,
                            });
                          }}
                          className="nav-link"
                          style={{ cursor: "pointer" }}
                        >
                          <i className="fa-solid fa-xmark text-danger fs-3 position-absolute top-0 end-0 "></i>
                        </a>
                      </h5>

                      {/*-- QUESTION --*/}
                      <div className="mb-4 w-100">
                        <textarea
                          className="form-control shs-textarea shadow w-100"
                          id="text"
                          placeholder="Type your question here"
                          onChange={(ev) => {
                            const tempAnswerKeys = question.answerKeys;
                            tempAnswerKeys[i].value = ev.target.value;
                            setQuestion({
                              ...question,
                              answerKeys: tempAnswerKeys,
                            });
                          }}
                        ></textarea>
                      </div>

                      {/*-- ANSWER KEY SELECTION --*/}
                      <div
                        className="btn-group d-flex flex-row flex-wrap mb-4"
                        role="group"
                        aria-label="Basic checkbox toggle button group"
                      >
                        <input
                          type="radio"
                          className="btn-check"
                          id={"btncheck" + i}
                          name={"yes" + i}
                          autoComplete="off"
                          onChange={() => {
                            const tempAnswerKeys = question.answerKeys;
                            tempAnswerKeys[i].correct = true;
                            setQuestion({
                              ...question,
                              answerKeys: tempAnswerKeys,
                            });
                          }}
                        />
                        <label
                          className="btn btn-outline-primary"
                          htmlFor={"btncheck" + i}
                        >
                          CORRECT
                        </label>

                        <input
                          type="radio"
                          className="btn-check"
                          id={"btncheck" + i + "a"}
                          name={"yes" + i}
                          autoComplete="off"
                          onChange={() => {
                            const tempAnswerKeys = question.answerKeys;
                            tempAnswerKeys[i].correct = false;
                            setQuestion({
                              ...question,
                              answerKeys: tempAnswerKeys,
                            });
                          }}
                        />
                        <label
                          className="btn btn-outline-primary"
                          htmlFor={"btncheck" + i + "a"}
                        >
                          WRONG
                        </label>
                      </div>
                    </section>
                  </section>
                );
              })}

              <button
                type="submit"
                className="btn btn-primary fs-6 mt-4 px-4 text-uppercase text-light fw-semibold fs-6"
              >
                CREATE QUESTION
              </button>
              <button
                onClick={() => {
                  const tempAnswerKeys = question.answerKeys;
                  tempAnswerKeys.push({});
                  setQuestion({
                    ...question,
                    answerKeys: tempAnswerKeys,
                  });
                }}
                className="btn btn-dark fs-6 ms-3 mt-4 px-4 text-uppercase text-light fw-semibold fs-6"
              >
                ADD NEW ANSWER KEY
              </button>
            </form>
          </section>
        </div>
      </section>
    </>
  );
}

export default Form;
