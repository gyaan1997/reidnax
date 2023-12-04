import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/system';

const StyledDrawer = styled(List)({
  width: '200px', 
 marginTop:"50px",
  paddingTop:'0px'
});

const Sidebar = ({ onSelectTab }) => {
  const [activeTab, setActiveTab] = useState('Data');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    onSelectTab(tab);
  };

  return (
    <StyledDrawer variant="permanent" anchor="left">
      <List>
        <ListItem selected={activeTab === 'Data'} onClick={() => handleTabClick('Data')}>
          <ListItemText primary="Data" />
        </ListItem>
        <ListItem selected={activeTab === 'Analytics'} onClick={() => handleTabClick('Analytics')}>
          <ListItemText primary="Analytics" />
        </ListItem>
      </List>
    </StyledDrawer>
  );
};

export default Sidebar;
