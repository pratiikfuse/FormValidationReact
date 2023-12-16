import React, { useState } from "react";

function Component() {
  const [password, setPassword] = useState("");
  const [isEmailInValid, setIsEmailInValid] = useState(true);
  const [isPasswordInvalid, setIsPassWordInvalid] = useState(true);
  const [isConfirmPasswordInvalid, setIsConfirmPasswordInvalid] =
    useState(true);

  function submitForm() {
    if (isEmailInValid || isPasswordInvalid || isConfirmPasswordInvalid) {
      alert("form is not complete");
      return;
    }
    alert("form submitted successfully");
  }

  function emailHandler(e) {
    let email = e.target.value;
    let regex = /[^\s@]+@[^\s@]+\.[^\s@]+/;
    console.log(regex.test(email));
    if (!regex.test(email)) {
      setIsEmailInValid(true);
    } else {
      setIsEmailInValid(false);
    }
  }

  function passwordHandler(e) {
    let password = e.target.value;
    setPassword(password);
    if (password.length < 8) {
      setIsPassWordInvalid(true);
    } else {
      setIsPassWordInvalid(false);
    }
  }
  function confirmPasswordHandler(e) {
    let confirmPassword = e.target.value;

    if (confirmPassword !== password) {
      setIsConfirmPasswordInvalid(true);
    } else {
      setIsConfirmPasswordInvalid(false);
    }
  }
  return (
    <form className="formContainer" onSubmit={submitForm}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          className={isEmailInValid ? "redBorder inputs" : "inputs"}
          type="email"
          id="email"
          required
          onChange={emailHandler}
        />
        <p className="error">{isEmailInValid && "Invalid email!"}</p>
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          className={isPasswordInvalid ? "redBorder inputs" : "inputs"}
          type="password"
          id="password"
          required
          onChange={passwordHandler}
        />
        <p className="error">
          {isPasswordInvalid && "password must be at least 8 characters long !"}
        </p>
      </div>
      <div>
        <label htmlFor="passwords">Confirm Password:</label>
        <input
          className={isConfirmPasswordInvalid ? "redBorder inputs" : "inputs"}
          type="password"
          id="passwords"
          required
          onChange={confirmPasswordHandler}
        />
        <p className="error">
          {isConfirmPasswordInvalid && "password do not match !"}
        </p>
      </div>
      <button id="signupButton" onClick={submitForm}>
        Sign Up
      </button>
    </form>
  );
}

export default Component;
