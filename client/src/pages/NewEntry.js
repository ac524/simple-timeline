import { useState } from 'react';

import { useMutation } from '@apollo/client';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useNavigate } from 'react-router-dom';

import { ADD_TIMELINE_ENTRY } from '../utils/mutations';

const NewEntry = () => {

    const [name, setName] = useState("");
    const [startDate, setStartDate] = useState("");

    const navigate = useNavigate();

    const [addTimeline, { error }] = useMutation(ADD_TIMELINE_ENTRY);

    const handleFormSubmit = async (event) => {

        event.preventDefault();

        const { error } = await addTimeline({
            variables: {
                entry: {
                    name,
                    startDate
                }
            }
        });

        if(!error) {
            navigate('/');
        }

    };

    return (
        <div>
            <Box component="h1">New Timeline Entry</Box>
            {error ? <Box component="div" sx={{padding: "1rem 0"}}>There was an error</Box> : null}
            <Box component="form" onSubmit={handleFormSubmit}>
                <Box sx={{padding: "1rem 0"}}>
                  <TextField
                    className="form-input"
                    fullWidth
                    label="Timeline Entry Name"
                    variant="outlined"
                    name="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Box>
                <Box sx={{padding: "1rem 0"}}>
                  <TextField
                    className="form-input"
                    fullWidth
                    label="Start Date"
                    variant="outlined"
                    name="startDate"
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </Box>
                <Button variant="contained" type="submit">Submit</Button>
              </Box>
        </div>
    );
}

export default NewEntry;