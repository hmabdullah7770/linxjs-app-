// src/screens/auth/signUp/index.jsx
import { Route, useNavigate, Routes } from 'react-router';
import EmailVerification from './EmailVerification';
import Credentials from './Credentials';
import ProfilePicture from './ProfilePicture';
import Complete from './Complete';

function SignUp({ handleLogin }) {
  return (
    <Routes> {/* Correctly returns <Routes> for its steps */}
      <Route index element={<EmailVerification />} />
      <Route path="credentials" element={<Credentials />} />
      <Route path="profile-picture" element={<ProfilePicture />} />
      <Route path="complete" element={<Complete handleLogin={handleLogin} />} />
    </Routes>
  );
}
export default SignUp;