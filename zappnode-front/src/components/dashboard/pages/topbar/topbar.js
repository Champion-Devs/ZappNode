import React from 'react';
import logo from '../../../../landing/imgs/zappnode logo.png';

const TopBar = ({user}) => {
  return (
    <div className="bg-black text-white">
      <div className="p-4 flex justify-between">
        <img className="w-40" src={logo} alt="" />
        <div>
          {user.email}
          <button className="text-sm ml-5 lowercase">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

