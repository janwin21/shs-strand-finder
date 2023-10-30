import sampleImg from "../../asset/strand/strand1.jpg";

function PEQuestion({ index, question }) {
  return (
    <>
      {/*-- QUESTION --*/}
      <section className="roboto d-flex flex-column justify-content-center align-items-start">
        <p className="mt-4">
          <strong>{index ? index : 0}) </strong>
          {question
            ? question
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis enim illum deserunt officiis, assumenda cumque facilis odit blanditiis tenetur non quos, architecto asperiores exercitationem ex perspiciatis neque tempora veritatis! Autem!"}
        </p>
      </section>
    </>
  );
}

export default PEQuestion;
