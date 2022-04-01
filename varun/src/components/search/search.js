import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const options = ['Chennai', 'Hyderabad', 'Bangalore', 'Mumbai', 'Delhi'];

function ControllableStates() {

    const [inputValue, setInputValue] = React.useState('');

    return (
        <div>
            
            <Autocomplete     
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                }}
                id="controllable-states-demo"
                options={options}
                sx={{ width: '60vw',marginLeft:'20vw', marginTop:'4vh' }}
                renderInput={(params) => <TextField {...params} placeholder="City" />}
            />
            <br />
            <h2>{`Entered City: " ${inputValue} "`}</h2>
        </div>
    );
}
export default ControllableStates