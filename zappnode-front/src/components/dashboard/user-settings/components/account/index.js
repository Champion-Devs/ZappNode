import React from 'react';
import { Card } from 'primereact/card';

const Account = () => {
  // Placeholder user object:
  const user = {
    name: "user1",
    email: "user1@gmail.com",
    tz: "CET", // Not currently in User schema
    plan: "Professional"
  };
  const profileIcon = <i className="pi pi-user mr-4"></i>
  let upgradePlan;

  // If the user's current plan is lower than the higher plan, then we show an
  // 'Upgrade' button. If our highest plan is called something other than
  // 'Business' then this must be changed as well.
  if (user.plan !== "Business") {
    upgradePlan = <button className="transition duration-500 hover:bg-white hover:text-green-500 border border-green-500 rounded bg-green-500 tracking-wider font-bold uppercase text-sm text-white ml-4 px-2">
      Upgrade
    </button>
  } else upgradePlan = null;
  return (
    <>
      <Card className="m-5">
        <div className="my-2">
          <h1 className="font-bold text-lg">
            {profileIcon}{user.name}
            <span className="text-base float-right">
              {user.plan}
              {upgradePlan}
            </span>
          </h1>
        </div>
        <hr/>
      </Card>
    </>
  )
};

export default Account;
