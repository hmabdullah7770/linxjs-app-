import * as React from 'react';

declare namespace AppScreens {
  interface Props {
    handleLogout: () => void;
  }
}

declare const AppScreens: React.FC<AppScreens.Props>;

export default AppScreens; 