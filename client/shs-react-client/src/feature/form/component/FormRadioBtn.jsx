function FormRadioBtn({ name, subjectType, onChangeCb }) {
  return (
    <>
      <input
        type="radio"
        className="btn-check"
        name={name}
        onChange={onChangeCb}
        id={subjectType.id}
        autoComplete="off"
      />
      <label className="btn btn-outline-primary" htmlFor={subjectType.id}>
        {subjectType.name}
      </label>
    </>
  );
}

export default FormRadioBtn;
