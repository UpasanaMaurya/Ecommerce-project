import React from "react";
import SignUp from "../features/auth/components/SignUp";
import Navbar from "../features/navbar/Navbar";

const SignUpPage = () => {
  return (
    <div>
      <Navbar>
        <SignUp />
      </Navbar>
    </div>
  );
};

export default SignUpPage;
