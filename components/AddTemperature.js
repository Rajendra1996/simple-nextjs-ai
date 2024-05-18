import axios from 'axios';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const AddTemperature = () => {
  const [roomID, setRoomID] = useState('');
  const [temperature, setTemperature] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/temperature', {
        room: roomID,
        temperature: temperature
      });
      alert('Temperature added!');
    } catch (error) {
      console.error('Error adding temperature:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Room ID"
        value={roomID}
        onChange={(e) => setRoomID(e.target.value)}
        margin="normal"
        variant="outlined"
      />
      <TextField
        label="Temperature"
        type="number"
        value={temperature}
        onChange={(e) => setTemperature(e.target.value)}
        margin="normal"
        variant="outlined"
      />
      <Button type="submit" variant="contained" color="primary">
        Add
      </Button>
    </form>
  );
};

export default AddTemperature;
