import sampleImg from "../../asset/strand/strand1.jpg";

function PEQuestion() {
  return (
    <>
      {/*-- QUESTION --*/}
      <section className="roboto d-flex flex-column justify-content-center align-items-center">
        <img
          className="mb-3"
          src={sampleImg}
          alt="answer key image"
          style={{ maxWidth: "250px" }}
        />
        <p>
          <strong>1) </strong>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis enim
          illum deserunt officiis, assumenda cumque facilis odit blanditiis
          tenetur non quos, architecto asperiores exercitationem ex perspiciatis
          neque tempora veritatis! Autem!
        </p>
      </section>
    </>
  );
}

export default PEQuestion;
