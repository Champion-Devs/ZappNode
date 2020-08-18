import React from 'react';
import { useHistory } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';

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
          <Link to="/api/auth/logout">
            <Button label="Logout"/>
          </Link>
        </Menubar>
      </div>
    </React.Fragment>
  );
}

export default NavBar;
