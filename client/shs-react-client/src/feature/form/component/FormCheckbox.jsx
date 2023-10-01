function FormCheckbox({ strandType, onChangeCb }) {
  return (
    <>
      <input
        type="checkbox"
        className="btn-check"
        onChange={onChangeCb}
        id={strandType.id}
        autoComplete="off"
      />
      <label className="btn btn-outline-primary" htmlFor={strandType.id}>
        {strandType.name}
      </label>
    </>
  );
}

export default FormCheckbox;
