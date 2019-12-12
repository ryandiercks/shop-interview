import React, { Component } from "react";
import FormInput from "../form-input/FormInput";
import "./Signin.scss";
import CustomButton from "../custom-button/CustomButton";

import { auth, signInwithGoogle } from "../../firebase/firebase.utils";
class Signin extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I've already had an account</h2>
        <span>Sign in with your email and password</span>

        <form action="" onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            type="email"
            name="email"
            label="Email"
            value={this.state.email}
            required
          />

          <FormInput
            type="password"
            handleChange={this.handleChange}
            name="password"
            label="Password"
            value={this.state.password}
            required
          />
          <div className="button">
            <CustomButton type="submit">SIGN IN</CustomButton>
            <CustomButton onClick={signInwithGoogle} isGoogleSignIn>
              SIGN IN WITH GOOGLE
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default Signin;
