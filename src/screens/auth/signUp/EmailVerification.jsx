import { useState } from 'react';
import { Route, useNavigate } from 'react-router';
// import { useNavigate } from '@lynx-js/react';


function EmailVerification() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  
  const onSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Store email in session/local storage or context for next steps
      localStorage.setItem('signupEmail', email);
      navigate('/signup/credentials');
    }
  };
  
  return (
    <view className="auth-container">
      <text variant="h1">Sign Up - Step 1</text>
      <text variant="h2">Email Verification</text>
      <form onSubmit={onSubmit}>
        <input 
          type="email" 
          placeholder="Your Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <button type="submit">Continue</button>
      </form>
      <text>
        Already have an account? 
        <button onPress={() => navigate('/signin')}>Sign In</button>
      </text>
    </view>
  );
}

export default EmailVerification;