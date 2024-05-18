import axios from 'axios';
import { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get('/api/rooms');
        setRooms(response.data.rooms);
      } catch (error) {
        console.error('Error fetching rooms:', error);
      }
    };

    fetchRooms();
  }, []);

  return (
    <List component="nav" aria-label="main mailbox folders">
      {rooms.map(room => (
        <ListItem key={room.id} button>
          <ListItemText primary={room.name} />
        </ListItem>
      ))}
    </List>
  );
};

export default Rooms;
