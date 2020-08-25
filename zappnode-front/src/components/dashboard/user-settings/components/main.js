import React from 'react';
import Account from './account';
import Alerts from './alerts';
import PublicStatusPage from './public-pages';
import Other from './other';

const Main = () => {
  return (
    <>
      {/* component imports */}
      <Account />
      <Alerts />
      <PublicStatusPage />
      <Other />
    </>
  );
};

export default Main;
