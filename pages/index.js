import RoomDetails from '../components/RoomDetails';

export default function Home() {
  // Assuming you want to display details for room 1
  const roomId = 1; // This could be dynamic based on user selection or routing

  return (
    <div>
      <RoomDetails roomId={roomId} />
    </div>
  );
}
