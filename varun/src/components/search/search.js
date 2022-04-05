import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import BasicTabs from '../tab/tab';
import './search.css'

const options = ['Chennai', 'Hyderabad', 'Bangalore', 'Mumbai', 'Delhi'];

function SearchStates(props) {
    const [value, setValue] = React.useState(options[0]);
    const [inputValue, setInputValue] = React.useState('');
    console.log(value)
    return (
        <div>
            <div className="main">Weather App</div>
            
            <Autocomplete     
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}

                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                }}
                id="controllable-states-demo"
                options={options}
                sx={{ width: '60vw',marginLeft:'20vw', marginTop:'5vh' }}
                renderInput={(params) => <TextField {...params} placeholder="City" />}
            />
            <br />
            <h2>{`Entered City: " ${inputValue} "`}</h2>

            <BasicTabs City={value}/>
        </div>
    );
}
export default SearchStates