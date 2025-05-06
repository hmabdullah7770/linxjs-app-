// src/App.tsx
import { useState, useEffect } from 'react';
// Import MemoryRouter for non-browser environments and ensure Navigate is imported
import { MemoryRouter, Routes, Route, Navigate } from 'react-router'; 

import AppScreens from './Stacks/AppScreens.jsx';
import AuthScreens from './Stacks/AuthScreens.jsx';

function App() {
  const [token, setToken] = useState<string | null>(null);
  
  const handleLogin = (userToken: string) => {
    console.log('User logged in with token:', userToken);
    setToken(userToken);
  };

  const handleLogout = () => {
    console.log('User logged out');
    setToken(null);
  };

  return (
    <view> {/* Assuming 'view' is a valid LynxJS component */}
      {/* Use MemoryRouter since it's not a browser environment */}
      <MemoryRouter> 
        <Routes>
          {token === null ? (
            <>
              <Route path="/auth/*" element={<AuthScreens handleLogin={handleLogin} />} />
              {/* Fallback for any non-matched auth paths */}
              <Route path="*" element={<Navigate to="/auth/signin" replace />} />
            </>
          ) : (
            <>
              <Route path="/app/*" element={<AppScreens handleLogout={handleLogout} />} />
              {/* Fallback for any non-matched app paths */}
              <Route path="*" element={<Navigate to="/app/home" replace />} />
            </>
          )}
          {/* 
            A direct route to "/" can also be useful as an ultimate fallback,
            directing to the correct section based on token state.
          */}
          <Route path="/" element={<Navigate to={token === null ? "/auth/signin" : "/app/home"} replace />} />
        </Routes>
      </MemoryRouter>
    </view>
  );
}

export default App;