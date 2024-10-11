import React, { useState } from 'react';
import { signUp, signIn } from './api';

const App: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSignUp = async () => {
    try {
      await signUp(username, password);
      setSuccess('Sign-up successful!');
    } catch (err) {
      setError(`Error signing up: ${err}`);
    }
  };

  const handleSignIn = async () => {
    try {
      const response = await signIn(username, password);
      localStorage.setItem('id_token', response.token);  // Save token after sign-in
      setSuccess('Sign-in successful!');
    } catch (err) {
      setError(`Error signing in: ${err}`);
    }
  };

  return (
    <div className="App">
      <h1>Sign Up / Sign In</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignUp}>Sign Up</button>
      <button onClick={handleSignIn}>Sign In</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  );
};

export default App;
