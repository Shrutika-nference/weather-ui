import * as React from 'react';
import PropTypes from 'prop-types';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const dataForTabs = [
    {index : 0, day: 'monday', temp: '18°C ', city: 'Mumbai'},
    {index : 1,day: 'Tuesday', temp: '20°C ', city: 'Mumbai'},
    {index : 2,day: 'Wednesday', temp: '26°C ', city: 'Mumbai'},
    {index : 4,day: 'Friday', temp: '30°C ', city: 'Mumbai'},
    {index : 3,day: 'Thursday', temp: '32°C ', city: 'Mumbai'},

    {index: 0,day: 'Monday', temp: '26°C ',city: 'Bangalore'},
    {index: 1,day: 'Tuesday', temp: '27°C ',city: 'Bangalore'},
    {index: 2,day: 'Wednesday', temp: '24°C ',city: 'Bangalore'},
    {index: 3,day: 'Thursday', temp: '22°C ',city: 'Bangalore'},
    {index: 4,day: 'Friday', temp: '30°C ',city: 'Bangalore'},

    {index: 0,day: 'Monday', temp: '32°C ', city: 'Delhi'},
    {index: 1,day: 'Tuesday', temp: '28°C ', city: 'Delhi'},
    {index: 2,day: 'wednesday', temp: '30°C ', city: 'Delhi'},
    {index: 3,day: 'Thursday', temp: '15°C ', city: 'Delhi'},
    {index: 4,day: 'Friday', temp: '37°C ', city: 'Delhi'},

    {index: 0,day: 'Monday', temp: '26°C ',city: 'Hyderabad'},
    {index: 1,day: 'Tuesday', temp: '29°C ',city: 'Hyderabad'},
    {index: 2,day: 'Wednesday', temp: '32°C ',city: 'Hyderabad'},
    {index: 3,day: 'Thursday', temp: '36°C ',city: 'Hyderabad'},
    {index: 4,day: 'Friday', temp: '39°C ',city: 'Hyderabad'},

    {index: 0,day: 'Monday', temp: '29°C ',city: 'Chennai'},
    {index: 1,day: 'Tuesday', temp: '34°C ',city: 'Chennai'},
    {index: 2,day: 'Wednesday', temp: '33°C ',city: 'Chennai'},
    {index: 3,day: 'Thursday', temp: '39°C ',city: 'Chennai'},
    {index: 4,day: 'Friday', temp: '42°C ',city: 'Chennai'}
]

export default function BasicTabs (props) {
    console.log(props.City)
const newData = dataForTabs.filter(i => i.city === props.City)

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {

    setValue(newValue);
  };


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
          role="tabpanel"
          hidden={value !== index}
          id={`simple-tabpanel-${index}`}
          aria-labelledby={`simple-tab-${index}`}
          {...other}
        >
          {value === index && (
            <Box sx={{ p: 3 }}>
              <Typography>{children}</Typography>
            </Box>
          )}
        </div>
      );
    }


TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };


function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

    return (
        <Box sx={{ width: '60%',marginLeft:'20vw' }}>
            <Box >
                <Tabs value={value} onChange={handleChange} >
                    <Tab label="Monday" {...a11yProps(0)} />
                    <Tab label="Tuesday" {...a11yProps(1)} />
                    <Tab label="Wednesday" {...a11yProps(2)} />
                    <Tab label="Thursday" {...a11yProps(3)} />
                    <Tab label="Friday" {...a11yProps(4)} />
                </Tabs>
            </Box>
            {newData.map((data) =>{
                {console.log(data.index)}
                return(<TabPanel value={value} index={data.index}>
                    <h3>Temperature: {data.temp} </h3><br/>
                    <span>Day: {data.day} </span><br/>
                    <span>City: {data.city} </span>
                </TabPanel>)
            })}
            
        </Box>
    );
}




          