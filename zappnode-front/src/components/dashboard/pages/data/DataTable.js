import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { TrackerService } from '../../../../service/TrackerService';
import { Dropdown } from 'primereact/dropdown';
import { ProgressBar } from 'primereact/progressbar';
import classNames from 'classnames';

function Datatable() {
  const [trackers, setTrackers] = useState([]);
  const [selectedTrackers, setSelectedTrackers] = useState(null);
  const [globalFilter, setGlobalFilter] = useState(null);
  const [selectedType, setSelectedStatus] = useState(null);
  const trackerService = new TrackerService();
  let dt = useRef(null);

  const trackerTypes = ['http', 'ping', 'port'];

  useEffect(() => {
    trackerService.getTrackerData().then((data) => {
      setTrackers(data);
    });
  }, [trackerService]);

  const renderHeader = () => {
    return (
      <div>
        List of Trackers
        <div className="p-datatable-globalfilter-container">
          <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Global Search" />
        </div>
      </div>
    );
  };

  const percentageBodyTemplate = (rowData) => {
    return <ProgressBar value={rowData.percentage} showValue={false} />;
  };

  const actionBodyTemplate = () => {
    return <Button type="button" icon="pi pi-cog" className="p-button-secondary" />;
  };

  const typeBodyTemplate = (rowData) => {
    return <span className={classNames('status-' + rowData.type)}>{rowData.type}</span>;
  };

  const renderTypeFilter = () => {
    return (
      <Dropdown
        value={selectedType}
        options={trackerTypes}
        onChange={onStatusFilterChange}
        itemTemplate={statusItemTemplate}
        showClear={true}
        placeholder="Filter for tracker type"
        className="p-column-filter"
      />
    );
  };

  const statusItemTemplate = (option) => {
    return <span className={classNames('customer-badge', 'status-' + option)}>{option}</span>;
  };

  const onStatusFilterChange = (event) => {
    dt.current.filter(event.value, 'status', 'equals');
    setSelectedStatus(event.value);
  };

  const header = renderHeader();
  const statusFilter = renderTypeFilter();

  return (
    <div className="datatable-doc-demo">
      <DataTable
        ref={dt}
        value={trackers}
        header={header}
        responsive
        className="p-datatable-trackers"
        dataKey="id"
        rowHover
        globalFilter={globalFilter}
        selection={selectedTrackers}
        onSelectionChange={(e) => setSelectedTrackers(e.value)}
        paginator
        rows={10}
        emptyMessage="No trackers found"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        rowsPerPageOptions={[10, 25, 50]}
      >
        <Column selectionMode="multiple" style={{ width: '3em' }} />
        <Column field="name" header="Name" sortable filter filterPlaceholder="Search by name" />
        <Column field="type" header="Type" body={typeBodyTemplate} sortable filter filterElement={statusFilter} />
        <Column
          field="percentage"
          header="Percentage"
          body={percentageBodyTemplate}
          sortable
          filter
          filterMatchMode="gte"
          filterPlaceholder="Minimum"
        />
        <Column
          body={actionBodyTemplate}
          headerStyle={{ width: '8em', textAlign: 'center' }}
          bodyStyle={{ textAlign: 'center', overflow: 'visible' }}
        />
      </DataTable>
    </div>
  );
}

export default Datatable;
