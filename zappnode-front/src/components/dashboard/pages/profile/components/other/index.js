import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { Dropdown } from 'primereact/dropdown';
import { nameParse } from './timezone-name-parse';
import moment from "moment-timezone";
import tzData from "./timezones.json";

const timezones = tzData.data;

const Other = () => {
  // Placeholder user object
  const user = {
    timezone: "Europe/Amsterdam"
  }

  const [timezone, setTimezone] = useState(user.timezone);

  // Get current UTC time to calculate offsets for each timezone
  const UTC = new Date().getTime();

  // Array of objects with timezone information:
  var tz = [];
  for (let zone of timezones) {
    tz.push({
      name: [moment(UTC).tz(zone).format("Z"), nameParse(zone)].join(" "),
      id: zone,
      offset: moment.tz.zone(zone).utcOffset(UTC)
    });
  };

  const timezoneChange = (e) => {
    e.preventDefault();
    setTimezone(e.value);
  };

  return (
    <>
      <Card className="m-5">
        <div className="my-4">
          <h1 className="text-xl font-bold">Other</h1>
        </div>
        <div className="my-4">
          Change your <span className="font-bold">timezone</span>
          <Dropdown
            value={timezone}
            placeholder={user.timezone}
            options={tz}
            optionLabel="name"
            optionValue="id"
            className="w-48 float-right"
            scrollHeight="300px"
            onChange={timezoneChange}
          />
        </div>
      </Card>
    </>
  );
};

export default Other;
