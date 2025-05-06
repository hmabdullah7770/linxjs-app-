// import { useNavigate } from '@lynx-js/react';
import { Route, useNavigate } from 'react-router';

function SettingsScreen({ handleLogout }) {
  const navigate = useNavigate();
  
  return (
    <view className="screen-container">
      <text variant="h1">Settings Screen</text>
      <text>Adjust your app settings here.</text>
      <view className="nav-buttons">
        <button onPress={() => navigate('/home')}>Go to Home</button>
        <button onPress={() => navigate('/profile')}>Go to Profile</button>
      </view>
      <view className="logout-section">
        <button 
          className="logout-button" 
          onPress={handleLogout}
        >
          Logout
        </button>
      </view>
    </view>
  );
}

export default SettingsScreen;