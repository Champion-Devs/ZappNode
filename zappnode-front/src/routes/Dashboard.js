import React, { useState } from 'react';
import SideBar from '../components/dashboard/pages/sidebar/sidebar';
import Settings from '../components/dashboard/pages/profile/index';
import Member from '../components/dashboard/pages/members/member';
import './dashboard.css';
function View(props) {
  return <div className={'view'}>{props[props.view]}</div>;
}

function Dashboard({ user }) {
  const [view, setView] = useState('Settings');
  console.log(user);

  return (
    <div className={'dashboard'}>
      <SideBar view={view} setView={setView} />
      <View Settings={<Settings user={user} />} Member={<Member user={user} />} view={view} />
    </div>
  );
}

export default Dashboard;
