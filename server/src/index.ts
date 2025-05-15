import "dotenv/config"
import express from "express"
import { errorHandler } from "./middlewares/error-handler"
import { validateData } from "./middlewares/validate-payload"
import { createBookingSchema, createRoomSchema } from "./zod-schemas"
import {
  createBooking,
  createRoom,
  getAllAvailableRooms,
  getAllBookings,
  getAllRooms,
} from "./controllers"

const app = express()

app.use(express.json())

app.get("/", (_, res) => {
  res.send("OK")
})

app.post("/create-room", validateData(createRoomSchema), createRoom)
app.get("/rooms", getAllRooms)
app.get("/rooms-available", getAllAvailableRooms)

app.post("/booking", validateData(createBookingSchema), createBooking)
app.get("/bookings", getAllBookings)

app.use(errorHandler)

app.listen(process.env.PORT, () => {
  console.log(`App is listening at port ${process.env.PORT}`)
})
