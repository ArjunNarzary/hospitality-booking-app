import useQuery from "../hooks/useQuery"
import CustomTable from "../components/CustomTable"
import type { IBookingsResponse } from "../interfaces"

const BookingPage = () => {
  const { data, loading } = useQuery<IBookingsResponse>("/bookings")
  return (
    <div>
      <h1 className="text-2xl font-semibold py-6">Booking History</h1>
      <CustomTable bookings={data?.bookings || []} loading={loading} />
    </div>
  )
}

export default BookingPage
