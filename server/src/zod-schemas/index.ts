import { z } from "zod"

export const createRoomSchema = z.object({
  name: z.string(),
  type: z.enum(["Single", "Double", "Deluxe", "Deluxe-Ac"], {
    message: "Invalid room type",
  }),
  pricePerNight: z.number(),
  imageUrl: z.string(),
})

export const createBookingSchema = z.object({
  fullName: z.string(),
  checkIn: z.coerce.date(),
  checkOut: z.coerce.date(),
  roomId: z.string(),
})
