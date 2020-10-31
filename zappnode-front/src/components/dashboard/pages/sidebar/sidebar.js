import React from 'react';

const sideBar = ({ view, setView }) => {
  const sideBarMenuItems = ['Settings', 'Overview', 'Members'];
  const buildMenu = (list) => {
    return list.map((p, i) => {
      return <button 
        key={i} 
        className={"transition duration-500 border rounded hover:border-white focus:outline-none tracking-wider font-bold p-2 my-1 " + ((view === p) ? "border-white" : "border-transparent")} 
        onClick={() => setView(`${p}`)}>{`${p}`}
        </button>;
    });
  };
  
  return (
    <div className="flex flex-col text-white bg-green-500 p-5">
      {buildMenu(sideBarMenuItems)}
    </div>
  );
};

export default sideBar;
