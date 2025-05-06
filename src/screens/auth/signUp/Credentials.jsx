import { useState } from 'react';
import { Route, useNavigate } from 'react-router';
// import { useNavigate } from '@lynx-js/react';


function Credentials() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  const onSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      // Store credentials in session/local storage or context
      localStorage.setItem('signupUsername', username);
      localStorage.setItem('signupPassword', password);
      navigate('/signup/profile-picture');
    }
  };
  
  return (
    <view className="auth-container">
      <text variant="h1">Sign Up - Step 2</text>
      <text variant="h2">Create Username & Password</text>
      <form onSubmit={onSubmit}>
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
        <button type="submit">Continue</button>
      </form>
      <button onPress={() => navigate('/signup')}>Back</button>
    </view>
  );
}

export default Credentials;