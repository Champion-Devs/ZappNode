import React from 'react';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';

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
    upgradePlan = <button className="transition duration-500 hover:bg-white hover:text-green-500 border hover:border-green-500 rounded bg-green-500 tracking-wider font-bold uppercase text-sm text-white ml-4 px-2">
      Upgrade
    </button>
  } else upgradePlan = null;
  return (
    <>
      <Card className="m-5">
        <div className="my-4">
          <h1 className="font-bold text-xl">
            {profileIcon}{user.name}
            <span className="text-base float-right">
              {user.plan}
              {upgradePlan}
            </span>
          </h1>
        </div>
        <hr/>
        <div className="my-4">
          <h2 className="text-lg font-bold">Email</h2>
          Your account is registered to <span className="font-bold">{user.email}</span>
          <span className="font-bold cursor-pointer float-right text-green-500">change e-mail address</span>
        </div>
        <div className="my-4">
          <h2 className="text-lg font-bold">Subscription</h2>
          You are currently subscribed to our <span className="font-bold">{user.plan}</span> plan
          <span className="font-bold cursor-pointer float-right text-green-500">upgrade</span>
        </div> 
        <div className="my-4">
          <h2 className="text-lg font-bold">Password change</h2>
          <div className="p-fluid">
            <div className="p-field">
              <label htmlFor="currentPassword">Current password</label>
              <InputText id="currentPassword" type="password" className="focus:outline-none" />
            </div>
            <div className="p-field">
              <label htmlFor="newPassword">New password</label>
              <InputText id="newPassword" type="password" />
            </div>
            <div className="p-field">
              <label htmlFor="confirmPassword">Confirm password</label>
              <InputText id="confirmPassword" type="password" />
            </div>
          </div>
          <button className="font-bold tracking-wider px-2 py-2 bg-green-500 text-white rounded transition duration-500 hover:bg-white hover:border-green-500 hover:text-green-500 border">
            Change password
          </button>
        </div>
      </Card>
    </>
  )
};

export default Account;
