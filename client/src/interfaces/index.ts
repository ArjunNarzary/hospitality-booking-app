export interface IResponse {
  success: boolean
  message?: string
}

export interface IRoom {
  id: string
  name: string
  type: string
  pricePerNight: number
  isAvailable: boolean
  imageUrl: string
}

export interface IRoomResponse extends IResponse {
  rooms: IRoom[]
}

export interface IBooking {
  id: string
  fullName: string
  checkIn: string
  checkOut: string
  createdAt: string
  room: IRoom
}

export interface IBookingsResponse extends IResponse {
  bookings: IBooking[]
}

export interface IFormFields {
  id: string
  label: string
  placeholder?: string
  value: string | Date
  type: "input" | "select" | "date-picker"
  option?: IRoom | []
  errorMessage?: string
}

export interface IBookRoomForm {
  fullName: IFormFields
  room: IFormFields
  checkIn: IFormFields
  checkOut: IFormFields
}

export interface IBookRoomPayload {
  fullName: string
  checkIn: string
  checkOut: string
  roomId: string
}
