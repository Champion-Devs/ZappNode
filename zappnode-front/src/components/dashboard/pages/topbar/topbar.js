import React from 'react';
import logo from '../../../../landing/imgs/zappnode logo.png';
import { API } from '../../../../service/API';

const TopBar = ({ user, setUser }) => {
  const logout = async () => {
    const res = await API.auth.logout();
    res.status === 'success' ? setUser(null) : console.log('logout error');
  };
  return (
    <div className="bg-black text-white">
      <div className="p-4 flex justify-between">
        <img className="w-40" src={logo} alt="" />
        <div>
          {user.email}
          <button className="text-sm ml-5 lowercase" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
