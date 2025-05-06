import { useState } from 'react';
import { Route, useNavigate } from 'react-router';
// import { useNavigate } from '@lynx-js/react';


function ProfilePicture() {
  const [pictureUrl, setPictureUrl] = useState('');
  const navigate = useNavigate();
  
  const onSubmit = (e) => {
    e.preventDefault();
    // Even if no picture is selected, let's proceed
    localStorage.setItem('signupPictureUrl', pictureUrl);
    navigate('/signup/complete');
  };
  
  return (
    <view className="auth-container">
      <text variant="h1">Sign Up - Step 3</text>
      <text variant="h2">Add Profile Picture</text>
      <form onSubmit={onSubmit}>
        <input 
          type="text" 
          placeholder="Picture URL (optional)" 
          value={pictureUrl} 
          onChange={(e) => setPictureUrl(e.target.value)} 
        />
        <button type="submit">Continue</button>
      </form>
      <button onPress={() => navigate('/signup/credentials')}>Back</button>
    </view>
  );
}

export default ProfilePicture;