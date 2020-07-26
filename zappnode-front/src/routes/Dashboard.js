import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import React, { useState, useEffect } from 'react';
import { Dialog } from 'primereact/dialog';
import { Panel } from 'primereact/panel';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';

function Dashboard() {
  const [trackers, setTrackers] = useState([]);
  const [visible, setVisible] = useState(false);
  const [layout, setLayout] = useState('list');
  const [selectedTracker, setSelectedTracker] = useState(null);
  const [sortKey, setSortKey] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);
  const [sortField, setSortField] = useState(null);

  useEffect(() => {
    setTrackers([
      {
        percentage: '100%',
        name: 'CNN',
        type: 'http',
      },
      {
        percentage: '99%',
        name: 'VG247',
        type: 'http',
      },
      {
        percentage: '100%',
        name: 'goal.com',
        type: 'http',
      },
    ]);
  }, []);

  const onSortChange = (event) => {
    const value = event.value;
    let _sortOrder;
    let _sortField;
    let _sortKey = value;

    if (value.indexOf('!') === 0) {
      _sortOrder = -1;
      _sortField = value.substring(1, value.length);
    } else {
      _sortOrder = 1;
      _sortField = value;
    }

    setSortOrder(_sortOrder);
    setSortField(_sortField);
    setSortKey(_sortKey);
  };

  const renderListItem = (tracker) => {
    return (
      <div className="p-col-12">
        <div>
          <div>
            <div className="p-grid">
              <div className="p-col-12">
                <b>{tracker.percentage}</b>
              </div>
              <div className="p-col-12">
                Name: <b>{tracker.name}</b>
              </div>
              <div className="p-col-12">
                Type: <b>{tracker.type}</b>
              </div>
            </div>
          </div>
          <Button
            onClick={(e) => {
              setSelectedTracker(tracker);
              setVisible(true);
            }}
          >
            Search
          </Button>
        </div>
      </div>
    );
  };

  const renderGridItem = (tracker) => {
    return (
      <div style={{ padding: '.5em' }} className="p-col-12 p-md-3">
        <Panel header={tracker.name} style={{ textAlign: 'center' }}>
          <div>{tracker.name}</div>
          <Button
            onClick={(e) => {
              setSelectedTracker(tracker);
              setVisible(true);
            }}
          >
            Search
          </Button>
        </Panel>
      </div>
    );
  };

  const itemTemplate = (tracker, layout) => {
    if (!tracker) {
      return;
    }

    if (layout === 'list') return renderListItem(tracker);
    else if (layout === 'grid') return renderGridItem(tracker);
  };

  const renderTrackerDialogContent = () => {
    if (selectedTracker) {
      return (
        <div className="p-grid" style={{ fontSize: '16px', textAlign: 'center', padding: '20px' }}>
          <div className="p-col-4">Percentage: </div>
          <div className="p-col-8">{selectedTracker.percentage}</div>

          <div className="p-col-4">Name: </div>
          <div className="p-col-8">{selectedTracker.name}</div>

          <div className="p-col-4">Type: </div>
          <div className="p-col-8">{selectedTracker.type}</div>
        </div>
      );
    } else {
      return <div>Empty</div>;
    }
  };

  const renderHeader = () => {
    const sortOptions = [{ label: 'A-Z', value: 'name' }];

    return (
      <div className="p-grid">
        <div className="p-col-6" style={{ textAlign: 'left' }}>
          <Dropdown
            options={sortOptions}
            value={sortKey}
            placeholder="Sort By"
            onChange={onSortChange}
            style={{ width: '12em' }}
          />
        </div>
        <div className="p-col-6" style={{ textAlign: 'right' }}>
          <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)} />
        </div>
      </div>
    );
  };

  const header = renderHeader();

  return (
    <div className="dataview-demo">
      <DataView
        value={trackers}
        layout={layout}
        header={header}
        itemTemplate={itemTemplate}
        paginatorPosition={'both'}
        paginator={true}
        rows={20}
        sortOrder={sortOrder}
        sortField={sortField}
      />

      <Dialog header="Trackers" visible={visible} modal={true} onHide={() => setVisible(false)}>
        {renderTrackerDialogContent()}
      </Dialog>
    </div>
  );
}

export default Dashboard;
