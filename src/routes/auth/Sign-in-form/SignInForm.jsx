import React, { useState } from "react";
import "./signin-form.stylr.scss";
import {
  SignInWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../../utils/firbase/firebaseutils";
import FormInput from "../../../components/form-input/FormInputComp";
import Button from "../../../components/button/Button";

const defaultFormField = {
  email: "",
  password: "",
};

function SignInForm() {
  const [formFields, setformFields] = useState(defaultFormField);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setformFields(defaultFormField);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setformFields({ ...formFields, [name]: value });
    console.log("name= ", name);
    console.log("value= ", value);
  };
  const signIinWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    console.log("logGoogleUser", user);
    await createUserDocumentFromAuth(user);
    alert("user loged in succesfully");
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    //createAuthUserWithEmailAndPassword
    try {
      const response = await SignInWithEmailAndPassword(email, password);
      alert(`user email ${response.user.email} loged in sussefuly`);
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-credential":
          alert("email or password are not correct");
          break;
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          alert(error);
      }
    }
  };
  return (
    <div className="sign-in-container">
      <h2>Sign in with your email and password</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        {/* <label>Email</label>
        <input
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        /> */}
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        {/* <label>Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        /> */}
        <div className="button-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" onClick={signIinWithGoogle} buttonType="google">
            Sign In with google
          </Button>
        </div>

        {/* <button type="submit">sign up with email and password </button> */}
      </form>
    </div>
  );
}

export default SignInForm;
