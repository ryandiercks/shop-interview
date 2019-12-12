import React from "react";

import "./credentials.scss";
import Signin from "../../components/signin/Signin";
import Signup from "../../components/signup/Signup";

const Credentials = () => (
  <div className="sign-in-and-sign-up">
    <Signin />
    <Signup />
  </div>
);

export default Credentials;
