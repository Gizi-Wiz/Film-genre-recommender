// components/SignIn.js
import { useState } from 'react';
import { signIn, signUp } from '../lib/auth';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [message, setMessage] = useState('');

  const handleAuth = async (e) => {
    e.preventDefault();
    let response;
    if (isSignUp) {
      response = await signUp(email, password);
      setMessage(response.error ? response.error.message : 'Sign up successful! Please sign in.');
    } else {
      response = await signIn(email, password);
      setMessage(response.error ? response.error.message : 'Sign in successful!');
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
      <form onSubmit={handleAuth}>
        <input
          type="email"
          placeholder="Email"
          className="p-2 border rounded mb-4 w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 border rounded mb-4 w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </button>
      </form>
      <p className="mt-4">
        {isSignUp ? 'Already have an account?' : "Don't have an account?"}
        <button
          onClick={() => setIsSignUp(!isSignUp)}
          className="text-blue-500 underline ml-1"
        >
          {isSignUp ? 'Sign In' : 'Sign Up'}
        </button>
      </p>
      {message && <p className="text-red-500 mt-2">{message}</p>}
    </div>
  );
};

export default SignIn;