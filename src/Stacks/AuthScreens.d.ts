import * as React from 'react';

declare namespace AuthScreens {
  interface Props {
    handleLogin: (token: string) => void;
  }
}

declare const AuthScreens: React.FC<AuthScreens.Props>;

export default AuthScreens; 