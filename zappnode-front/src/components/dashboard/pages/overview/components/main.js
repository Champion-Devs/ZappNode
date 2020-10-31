import React from 'react';
import { Card } from 'primereact/card';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';

const Main = ({ user }) => {
  const desktopIcon = <i className="pi pi-desktop mr-4"></i>;

  console.log(typeof user.monitors)

  const dateTemplate = (monitor) => {
    return <span>{monitor.created_at.toDateString()}</span>
  }

  const statusTemplate = (monitor) => {
    return <span className={"px-2 font-bold text-xs rounded text-white " + (monitor.isUp? "bg-green-600" : "bg-red-600")}>{monitor.isUp === true ? "Up" : "Down"}</span>
  }

  return (
    <>
      <Card className="m-5">
        <div className="my-4">
          <h1 className="font-bold text-xl">
            {desktopIcon}
            Overview
          </h1>
        </div>
        <hr />
        <div className="my-4">
          <DataTable value={user.monitors}>
            <Column className="text-center" field="isUp" header="Status" body={statusTemplate} />
            <Column field="title" header="Title" />
            <Column field="created_at" header="Date" body={dateTemplate} />
            <Column field="totalRequests" header="Requests" />
          </DataTable>
        </div>
      </Card>
    </>
  );
};

export default Main;
