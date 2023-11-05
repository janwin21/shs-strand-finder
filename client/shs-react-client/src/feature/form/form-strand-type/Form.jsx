import { useNavigate } from "react-router-dom";
import { dashboardRoute } from "../../../route/routes";
import StrandType from "../../../js/model/StrandType";

function Form({ strandtype, cb }) {
  const navigate = useNavigate();

  const submit = async (ev) => {
    ev.preventDefault();
    const strandTypeModel = new StrandType();
    const data = await strandTypeModel.create(strandtype);

    if (data?.error) {
      console.log(data.error);
    } else {
      navigate(dashboardRoute.path);
    }
  };

  return (
    <>
      {/*-- FORM CONTAINER --*/}
      <section className="strand-type-container position-relative mt-5">
        <h5 className="w-100 poppins border-bottom border-dark text-uppercase fw-semibold">
          FILL IN THE BLANKS
        </h5>
        {/*-- STRAND TYPE FORM --*/}
        <form onSubmit={submit} className="w-100">
          {/*-- NAME --*/}
          <div className="mb-4 w-100">
            <input
              type="text"
              className="form-control shs-input shadow"
              id="text"
              autoComplete="off"
              placeholder="Strand Group Name"
              value={strandtype.name}
              onChange={(ev) => {
                cb({ name: ev.target.value });
              }}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary fs-6 px-4 text-uppercase text-light fw-semibold fs-6"
          >
            CREATE STRAND TYPE
          </button>
        </form>
      </section>
    </>
  );
}

export default Form;
