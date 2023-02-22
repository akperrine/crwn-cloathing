import { useState } from "react";
import { useDispatch } from "react-redux";

import FormInput from "../Form-Input/Form-Input";
import { SignupContainer } from "./sign-upForm.styles.js";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button";

import { signUpStart } from "../../store/user/user.action";

const defaultformFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultformFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultformFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }
    try {
      dispatch(signUpStart(email, password, displayName));
      resetFormFields();
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log(`error: ${err}`);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignupContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button buttonType={BUTTON_TYPE_CLASSES.base} type="submit">
          Sign Up
        </Button>
      </form>
    </SignupContainer>
  );
};

export default SignUpForm;
