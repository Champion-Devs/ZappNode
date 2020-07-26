import React from 'react';
import { useHistory } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';

function NavBar() {
  const history = useHistory();

  const handleRoute = (path) => {
    history.push(`${path}`);
  };

  const menuItems = [
    {
      label: 'ZappNode',
      icon: 'pi pi-home',
      command: () => handleRoute('/'),
    },
    {
      label: 'Features',
      command: () => handleRoute('/features'),
    },
    {
      label: 'Usage',
      command: () => handleRoute('/usage'),
    },
    {
      label: 'Pricing',
      command: () => handleRoute('/pricing'),
    },
    {
      label: 'Dashboard',
      command: () => handleRoute('/dashboard'),
    },
  ];

  return (
    <React.Fragment>
      <div className="p-3">
        <Menubar model={menuItems}>
          <Button label="Login" />
          <Button style={{ marginLeft: '4px', backgroundColor: 'green' }} label="Register" />
        </Menubar>
      </div>
    </React.Fragment>
  );
}

export default NavBar;
