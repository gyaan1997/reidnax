import React, { useState } from 'react';
import Sidebar from '../Components/Analytics/Sidebar';
import DataContent from '../Components/Analytics/dataContent';
import AnalyticsContent from '../Components/Analytics/AnalyticContent';

function Analytics() {
  const [selectedTab, setSelectedTab] = useState('Data');

  const handleTabSelect = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div style={{ flex: '0 0 auto', backgroundColor: '#95B9C7', padding: '10px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '32px', margin: 0, color: 'black' }}>Data Analysis</h1>
      </div>
      <div style={{ display: 'flex', flex: '1' }}>
        <Sidebar onSelectTab={handleTabSelect} />
        <div style={{ flex: '1' }}>
          {selectedTab === 'Data' ? <DataContent /> : <AnalyticsContent />}
        </div>
      </div>
    </div>
  );
}

export default Analytics;
