import type { IFormFields } from "../interfaces"

export const BookFormFields: Record<string, IFormFields> = {
  fullName: {
    id: "fullName",
    label: "Full Name",
    placeholder: "Full Name",
    value: "",
    type: "input",
  },
  roomId: {
    id: "roomId",
    label: "Select Room",
    value: "",
    type: "select",
    placeholder: "Select Room",
  },
  checkIn: {
    id: "checkIn",
    label: "Check In",
    value: new Date(),
    type: "date-picker",
  },
  checkOut: {
    id: "checkOut",
    label: "Check In",
    value: new Date(),
    type: "date-picker",
  },
}
