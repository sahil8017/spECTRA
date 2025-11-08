// src/routes/signInPage/SignInPage.jsx

import { SignIn } from "@clerk/clerk-react";
import "./signInPage.css";
import { dark } from "@clerk/themes";

const SignInPage = () => {
  const hasClerk = Boolean(import.meta.env.VITE_CLERK_PUBLISHABLE_KEY);

  if (!hasClerk) {
    return <div className="signInPage">Authentication is not configured.</div>;
  }

  return (
    <div className="signInPage">
      <SignIn
        path="/sign-in"
        routing="path"
        signUpUrl="/sign-up"
        afterSignInUrl="/dashboard"
        appearance={{
          baseTheme: dark, // you can also remove this line if you don’t want dark mode
        }}
      />
    </div>
  );
};

export default SignInPage;
