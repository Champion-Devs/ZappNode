import React from 'react';
import Account from './account';
import Alerts from './alerts';
import PublicStatusPage from './public-pages';

const Main = () => {
  return (
    <>
      {/* component imports */}
      <Account />
      <Alerts />
      <PublicStatusPage />
    </>
  );
};

export default Main;
