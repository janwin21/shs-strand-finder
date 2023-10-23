import sampleImg from "../../asset/strand/strand1.jpg";

function PEChoices() {
  return (
    <>
      {/*-- CHOICES --*/}
      <button className="btn btn-light w-100 p-3 my-2 d-flex flex-column">
        <p className="m-0 text-start">
          <strong>A. </strong>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </button>
      <button className="btn btn-light w-100 p-3 my-2 d-flex flex-column">
        <img
          className="mb-3"
          src={sampleImg}
          alt="answer key image"
          style={{ maxWidth: "250px" }}
        />
        <p className="m-0 text-start">
          <strong>A.</strong>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </button>
    </>
  );
}

export default PEChoices;
