// src/routes/signUpPage/SignUpPage.jsx

import { SignUp } from "@clerk/clerk-react";
import "./signUpPage.css";
import { dark } from "@clerk/themes";

const SignUpPage = () => {
  const hasClerk = Boolean(import.meta.env.VITE_CLERK_PUBLISHABLE_KEY);

  if (!hasClerk) {
    return <div className="signUpPage">Authentication is not configured.</div>;
  }

  return (
    <div className="signUpPage">
      <SignUp
        path="/sign-up"
        routing="path"
        signInUrl="/sign-in"
        afterSignUpUrl="/dashboard"
        appearance={{
          baseTheme: dark, // you can remove this if you want light mode
        }}
      />
    </div>
  );
};

export default SignUpPage;
