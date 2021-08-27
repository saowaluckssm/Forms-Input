import useInput from "../hook/use-input";

const BasicForm = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLastname,
    isValid: enteredLastnameIsValid,
    hasError: lastnameInputHasError,
    valueChangeHandler: lastnameChangedHandler,
    inputBlurHandler: lastnameBlurHandler,
    reset: resetLastnameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;
  if (enteredNameIsValid && enteredLastnameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (
      !enteredNameIsValid &&
      !enteredLastnameIsValid &&
      !enteredEmailIsValid
    ) {
      return console.log("invalid");
    }

    console.log(enteredName);
    console.log(enteredLastname);
    console.log(enteredEmail);
    resetNameInput();
    resetLastnameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";
  const lastnameInputClasses = lastnameInputHasError
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={nameChangedHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          />
          {nameInputHasError && (
            <p className="error-text"> Name must not be empty.</p>
          )}
        </div>
        <div className="form-control">
          <div className={lastnameInputClasses}>
            <label htmlFor="name">Last Name</label>
            <input
              type="text"
              id="name"
              onChange={lastnameChangedHandler}
              onBlur={lastnameBlurHandler}
            />
            {lastnameInputHasError && (
              <p className="error-text"> Lastname must not be empty.</p>
            )}
          </div>
        </div>
      </div>
      <div className="form-control">
        <div className={emailInputClasses}>
          <label htmlFor="name">E-Mail Address</label>
          <input
            type="text"
            id="name"
            onChange={emailChangedHandler}
            onBlur={emailBlurHandler}
          />
          {emailInputHasError && (
            <p className="error-text"> Email must not be empty.</p>
          )}
        </div>
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
