import React from 'react';
const sideBar = ({ setView }) => {
  const sideBarMenuItems = ['Settings', 'Overview', 'Member'];
  const buildMenu = (list) => {
    return list.map((i) => {
      return <button onClick={() => setView(`${i}`)}>{`${i}`}</button>;
    });
  };
  return <div className={'sidebar'}>{buildMenu(sideBarMenuItems)}</div>;
};

export default sideBar;
