function AccessTable() {
  return (
    <>
      {/*-- FORM CONTAINER --*/}
      <section className="strand-type-container position-relative mt-5">
        <h5 className="w-100 poppins border-bottom border-dark text-uppercase fw-semibold">
          LIST OF USERS
        </h5>
        {/*-- USER TABLE --*/}
        <table className="table">
          <thead>
            <tr>
              <th scope="col">User ID</th>
              <th scope="col">Email</th>
              <th scope="col" colSpan="2">
                Access
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td className="text-end">
                <button className="btn btn-dark roboto px-4 m-0 fs-6">
                  ALLOW
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td className="text-end">
                <button className="btn btn-danger roboto px-4 m-0 fs-6">
                  NOT ALLOW
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry the Bird</td>
              <td>@twitter</td>
              <td className="text-end">
                <button className="btn btn-dark roboto px-4 m-0 fs-6">
                  ALLOW
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}

export default AccessTable;
