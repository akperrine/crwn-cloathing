import SignUpForm from "../../components/Sign-up/sign-upForm.jsx";
import SignInForm from "../../components/Sign-In-Form/Sign-In-Form";

import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
