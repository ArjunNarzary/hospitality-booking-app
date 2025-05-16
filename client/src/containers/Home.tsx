import RoomCard from "../components/RoomCard"
import useQuery from "../hooks/useQuery"
import type { IRoomResponse } from "../interfaces"

const Home = () => {
  const { data, loading, error } = useQuery<IRoomResponse>("/rooms")

  if (error) {
    return <div>Error</div>
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold py-6">Rooms</h1>
      {loading ? (
        <div className="flex justify-center items-center py-6 font-bold text-xl">
          Loading....
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {data &&
            data.rooms.map((room) => <RoomCard key={room.id} {...room} />)}
        </div>
      )}
    </div>
  )
}

export default Home
