import React, { useState } from 'react';
import SideBar from '../components/dashboard/pages/sidebar/sidebar';
import TopBar from '../components/dashboard/pages/topbar/topbar';
import Settings from '../components/dashboard/pages/profile';
import Overview from '../components/dashboard/pages/overview';
import Member from '../components/dashboard/pages/members/member';
import { User, Monitor } from "../service/API";
function View(props) {
  return <div className="flex flex-col w-full min-h-screen">{props[props.view]}</div>;
}

function Dashboard({ user }) {
  const [view, setView] = useState('Settings');

  // Dummy user
  // Overrides the user object passed in as a prop
  user = new User({
    name: "testUser",
    email: "test@gmail.com",
    password: "123123",
    members: [
      "other_user@email.com",
      "anotherMember123@gmail.com"
    ],
    timezone: "Europe/Amsterdam",
    monitors: [
      new Monitor({
        title: "HTTP Mon",
        created_at: new Date(2019, 10,3),
        active: true,
        isUp: true,
        paused: false,
        totalRequests: 100,
        lastRequest: new Date(2020, 10, 1),
        totalDownTimes: 4,
        lastDownTime: new Date(2019, 12, 13),
        interval: 1
      }),
      new Monitor({
        title: "Ping Mon",
        created_at: new Date(2019, 12,3),
        active: true,
        isUp: false,
        paused: false,
        totalRequests: 50,
        lastRequest: new Date(2020, 2, 9),
        totalDownTimes: 3,
        lastDownTime: new Date(2019, 12, 13),
        interval: 1
      })
    ]
  });
  console.log("User:", user);

  return (
    <div className="flex flex-row">
      <SideBar view={view} setView={setView} />
      <div className="w-full">
        <TopBar user={user} />
        <View Overview={<Overview user={user} />} Settings={<Settings user={user} />} Member={<Member user={user} />} view={view} />
      </div>

    </div>
  );
}

export default Dashboard;
