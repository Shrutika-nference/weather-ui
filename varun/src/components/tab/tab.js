import * as React from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Box from '@mui/material/Box';

function TabPanel(props) {
    const { children, value, index } = props;

    return (
        <div>

            {value === index && (
                <Box sx={{ p: 2 }}>
                    <h2>{children}</h2>
                </Box>
            )}
        </div>
    );
}



function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '60%',marginLeft:'20vw' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} >
                    <Tab label="Monday" {...a11yProps(0)} />
                    <Tab label="Tuesday" {...a11yProps(1)} />
                    <Tab label="Wednesday" {...a11yProps(2)} />
                    <Tab label="Thursday" {...a11yProps(3)} />
                    <Tab label="Friday" {...a11yProps(4)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                Monday
            </TabPanel>
            <TabPanel value={value} index={1}>
                Tuesday
            </TabPanel>
            <TabPanel value={value} index={2}>
                Wednesday
            </TabPanel>
            <TabPanel value={value} index={3}>
                Thursday
            </TabPanel>
            <TabPanel value={value} index={4}>
                Friday
            </TabPanel>
        </Box>
    );
}
export default BasicTabs