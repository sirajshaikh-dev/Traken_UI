import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { EyeIcon } from './EyeIcon';

interface SignInFormProps {
  onSignIn?: (email: string, password: string, remember: boolean) => void;
  onGoogleSignIn?: () => void;
  onGithubSignIn?: () => void;
  onSignUp?: () => void;
  onPasswordReset?: () => void;
  initialRemember?: boolean;
}

export function SignInForm({
  onSignIn,
  onGoogleSignIn,
  onGithubSignIn,
  onSignUp,
  onPasswordReset,
  initialRemember = false,
}: SignInFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(initialRemember);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSignIn?.(email, password, remember);
  };

  return (
    <div className="max-w-md w-full mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden p-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Welcome Back</h1>
        <p className="text-gray-600 dark:text-gray-300">Sign in to your account</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Password <span className="text-red-500">*</span>
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full pr-10 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
              placeholder="••••••••"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <EyeIcon 
                visible={showPassword} 
                toggle={() => setShowPassword(!showPassword)}
                className="h-5 w-5"
              />
            </div>
        </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember"
              name="remember"
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 dark:border-gray-600 rounded"
            />
            <label htmlFor="remember" className="ml-2 block text-sm text-gray-700 dark:text-gray-300 select-none">
              Remember me
            </label>
          </div>

          <button
            type="button"
            onClick={onPasswordReset}
            className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300"
          >
            Forgot password?
          </button>
        </div>

        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
          >
            Sign In
          </button>
        </div>
      </form>

      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
              Or continue with
            </span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <button
            onClick={onGoogleSignIn}
            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-sm font-medium text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200"
          >
            <FcGoogle className="h-5 w-5" />
            <span className="ml-2">Google</span>
          </button>

          <button
            onClick={onGithubSignIn}
            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-sm font-medium text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200"
          >
            <FaGithub className="h-5 w-5" />
            <span className="ml-2">GitHub</span>
          </button>
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Don't have an account?{' '}
          <button
            onClick={onSignUp}
            className="font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
}