import { useState } from 'react';
import { Route, useNavigate } from 'react-router';
// import { useNavigate } from '@lynx-js/react';


function SignIn({ handleLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  const onSubmit = (e) => {
    e.preventDefault();
    // Mock authentication - in a real app, you'd call an API
    if (email && password) {
      // Generate mock token
      const mockToken = 'mock-jwt-token-' + Date.now();
      handleLogin(mockToken);
    }
  };
  
  return (
    <view className="auth-container">
      <text variant="h1">Sign In</text>
      <form onSubmit={onSubmit}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button type="submit">Sign In</button>
      </form>
      <text>
        Don't have an account? 
        <button onPress={() => navigate('/signup')}>Sign Up</button>
      </text>
    </view>
  );
}

export default SignIn;