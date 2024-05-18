// components/RoomDetails.js
import axios from 'axios';
import { useEffect, useState } from 'react';

const RoomDetails = ({ roomId }) => {
  const [roomDetails, setRoomDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRoomDetails = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`/api/room?id=${roomId}`);
        setRoomDetails(response.data);
        setIsLoading(false);
      } catch (err) {
        setError('Failed to fetch room details');
        setIsLoading(false);
      }
    };

    fetchRoomDetails();
  }, [roomId]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Room Details: {roomDetails.name}</h1>
      <p>Average Temperature: {roomDetails.average}°C</p>
      <p>Number of Recorded Days: {roomDetails.days}</p>
    </div>
  );
};

export default RoomDetails;
