// src/Stacks/AppScreens.jsx
import { Route, useNavigate ,Routes} from 'react-router';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';

function AppScreens({ handleLogout }) {
  return (
    <Routes> {/* Correctly returns <Routes> */}
      <Route path="home" element={<HomeScreen />} />
      <Route path="profile" element={<ProfileScreen />} />
      <Route path="settings" element={<SettingsScreen handleLogout={handleLogout} />} />
      <Route index element={<HomeScreen />} /> {/* Default to home for this stack */}
    </Routes>
  );
}
export default AppScreens;