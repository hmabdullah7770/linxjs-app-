// src/Stacks/AuthScreens.jsx
import { Routes, Route, Navigate } from 'react-router'; // Import Navigate
import SignIn from '../screens/auth/signIn/signIn';
import SignUp from '../screens/auth/signUp/index';

function AuthScreens({ handleLogin }) { // Accept handleLogin prop
  return (
    <Routes> {/* Must return a <Routes> block */}
      {/* Paths are now relative to where AuthScreens is mounted (e.g., /auth) */}
      <Route path="signin" element={<SignIn handleLogin={handleLogin} />} />
      {/* SignUp component handles its own nested routes, so use '/*' */}
      <Route path="signup/*" element={<SignUp handleLogin={handleLogin} />} />
      {/* Default route for this stack: if path is just '/auth', navigate to '/auth/signin' */}
      <Route index element={<Navigate to="signin" replace />} />
      {/* Optional: Catch-all within /auth if a sub-path doesn't match */}
      <Route path="*" element={<Navigate to="signin" replace />} /> 
    </Routes>
  );
}

export default AuthScreens;