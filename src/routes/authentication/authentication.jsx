import SignUpForm from "../../components/Sign-up/sign-upForm.jsx";
import SignInForm from "../../components/Sign-In-Form/Sign-In-Form";

import { AuthenticationContainer } from "./authentication.styles.js";

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
