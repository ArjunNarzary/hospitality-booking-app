import type { IRoom } from "../interfaces"

const RoomCard = ({
  name,
  type,
  isAvailable,
  pricePerNight,
  imageUrl,
}: IRoom) => {
  return (
    <div className="rounded-md overflow-hidden border border-gray-50 shadow text-gray-700">
      <div className="w-full">
        <img src={imageUrl} alt={name} className="aspect-square object-cover" />
      </div>
      <div className="p-2">
        <h2 className="font-bold text-xl">{name}</h2>
        <h3>
          {type} (
          <span className={isAvailable ? "text-green-600" : "text-red-500"}>
            {isAvailable ? "Available" : "Not Available"}
          </span>
          )
        </h3>
        <h3 className="text-sm">₹ {pricePerNight.toFixed(2)} per night</h3>
      </div>
    </div>
  )
}

export default RoomCard
