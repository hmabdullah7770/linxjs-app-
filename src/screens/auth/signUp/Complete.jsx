import { useEffect } from 'react';
import { Route, useNavigate } from 'react-router';
// import { useNavigate } from '@lynx-js/react';


function Complete({ handleLogin }) {
  const navigate = useNavigate();
  
  useEffect(() => {
    // In a real app, you would call an API to create the user account
    const email = localStorage.getItem('signupEmail');
    const username = localStorage.getItem('signupUsername');
    const password = localStorage.getItem('signupPassword');
    const pictureUrl = localStorage.getItem('signupPictureUrl');
    
    if (email && username && password) {
      // Mock successful registration
      console.log('User registered:', { email, username, pictureUrl });
      
      // Clean up signup data
      localStorage.removeItem('signupEmail');
      localStorage.removeItem('signupUsername');
      localStorage.removeItem('signupPassword');
      localStorage.removeItem('signupPictureUrl');
      
      // Auto-login after signup
      setTimeout(() => {
        const mockToken = 'new-user-token-' + Date.now();
        handleLogin(mockToken);
      }, 2000);
    }
  }, [handleLogin]);
  
  return (
    <view className="auth-container">
      <text variant="h1">Sign Up Complete!</text>
      <text>Your account has been created successfully.</text>
      <text>You will be automatically logged in...</text>
    </view>
  );
}

export default Complete;