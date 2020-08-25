import React from 'react';
import { Card } from 'primereact/card';

const PublicStatusPage = () => {
  return (
    <>
      <Card className="m-5">
        <div className="my-4">
          <h1 className="font-bold text-lg">
            Public Status Page
            <button className="text-sm font-bold bg-green-500 rounded py-1 px-2 text-white float-right">
              Add page
            </button>
          </h1>
        </div>
        <hr />
      </Card>
    </>
  );
};

export default PublicStatusPage;
