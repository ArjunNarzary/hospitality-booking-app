import prismaClient from "../services/prisma"

import { Request, NextFunction, Response } from "express"
import asyncHandler from "../utils/asyncHandler"
import CustomError from "../utils/customError"

export const createRoom = asyncHandler(async (req: Request, res: Response) => {
  const room = await prismaClient.room.create({
    data: req.body,
  })

  res.status(201).json({
    success: true,
    message: "Room created successful",
  })
})

export const getAllRooms = asyncHandler(async (req: Request, res: Response) => {
  const rooms = await prismaClient.room.findMany()

  res.status(200).json({
    success: true,
    rooms,
  })
})

export const getAllAvailableRooms = asyncHandler(
  async (req: Request, res: Response) => {
    const availableRooms = await prismaClient.room.findMany({
      where: { isAvailable: true },
    })

    res.status(200).json({
      success: true,
      rooms: availableRooms,
    })
  }
)

export const createBooking = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    // Check if room is available or not
    const isRoomAvailable = await prismaClient.room.findUnique({
      where: {
        id: req.body.roomId,
      },
    })

    if (!isRoomAvailable) {
      const err = new CustomError("Room doesn't exist", 400)
      next(err)
      return
    }

    if (isRoomAvailable.isAvailable === false) {
      const err = new CustomError("Room is not available", 400)
      next(err)
      return
    }

    const booking = await prismaClient.booking.create({
      data: {
        ...req.body,
        checkIn: new Date(req.body.checkIn),
        checkOut: new Date(req.body.checkOut),
      },
    })

    if (booking) {
      await prismaClient.room.update({
        where: {
          id: isRoomAvailable.id,
        },
        data: {
          isAvailable: false,
        },
      })
    }

    res.status(200).json({
      success: true,
      message: "Room booked successfully",
    })
  }
)

export const getAllBookings = asyncHandler(
  async (req: Request, res: Response) => {
    const bookings = await prismaClient.booking.findMany({
      include: {
        room: true,
      },
    })

    res.status(200).json({
      success: true,
      bookings,
    })
  }
)
