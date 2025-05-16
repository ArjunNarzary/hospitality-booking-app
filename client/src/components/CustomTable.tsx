import { useEffect, useState } from "react"
import type { IBooking } from "../interfaces"
import DataTable from "react-data-table-component"

const CustomTable = ({
  bookings,
  loading,
}: {
  bookings: IBooking[]
  loading: boolean
}) => {
  const [columns, setColumns] = useState<
    {
      name: string
      selector: (row: IBooking) => string
      format?: (row: IBooking) => string
    }[]
  >([])

  useEffect(() => {
    const columnsData = [
      {
        name: "Name",
        selector: (row: IBooking) => row.fullName,
        sortable: true,
      },
      {
        name: "Room Name",
        selector: (row: IBooking) => row.room.name,
        sortable: true,
      },
      {
        name: "Room Type",
        selector: (row: IBooking) => row.room.type,
        sortable: true,
      },
      {
        name: "Check In",
        selector: (row: IBooking) => row.checkIn,
        format: (row: IBooking) =>
          new Date(row.checkIn).toLocaleDateString("en-US"),
        sortable: true,
      },
      {
        name: "Check Out",
        selector: (row: IBooking) => row.checkOut,
        format: (row: IBooking) =>
          new Date(row.checkOut).toLocaleDateString("en-US"),
        sortable: true,
      },
      {
        name: "Booking Date",
        selector: (row: IBooking) => row.createdAt,
        format: (row: IBooking) =>
          new Date(row.createdAt).toLocaleDateString("en-US"),
        sortable: true,
      },
    ]

    setColumns(columnsData)
  }, [bookings])

  return (
    <div>
      <DataTable
        columns={columns}
        data={bookings}
        progressPending={loading}
        pagination
      />
    </div>
  )
}

export default CustomTable
