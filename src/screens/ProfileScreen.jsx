// import { useNavigate } from '@lynx-js/react';
import { Route, useNavigate } from 'react-router';

function ProfileScreen() {
  const navigate = useNavigate();
  
  return (
    <view className="screen-container">
      <text variant="h1">Profile Screen</text>
      <text>This is your profile. You can view and edit your information here.</text>
      <view className="nav-buttons">
        <button onPress={() => navigate('/home')}>Go to Home</button>
        <button onPress={() => navigate('/settings')}>Go to Settings</button>
      </view>
    </view>
  );
}

export default ProfileScreen;