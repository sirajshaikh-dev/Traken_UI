import { useState } from 'react';
import { SignInForm } from './SigninForm';
import { SignUpForm } from './SignupForm';
export function AuthDemo() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      {isSignUp ? (
        <SignUpForm
          onSignUp={(email, password, name) => console.log('Sign up:', email, password, name)}
          onGoogleSignIn={() => console.log('Google sign in')}
          onGithubSignIn={() => console.log('GitHub sign in')}
          onSignIn={() => setIsSignUp(false)}
        />
      ) : (
        <SignInForm
          onSignIn={(email, password, remember) => console.log('Sign in:', email, password, remember)}
          onGoogleSignIn={() => console.log('Google sign in')}
          onGithubSignIn={() => console.log('GitHub sign in')}
          onSignUp={() => setIsSignUp(true)}
          onPasswordReset={() => console.log('Password reset')}
        />
      )}
    </div>
  );
}