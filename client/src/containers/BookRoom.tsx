import { useState } from "react"
import Input from "../components/Input"
import Select from "../components/Select"
import CustomDatepicker from "../components/CustomDatepicker"
import { BookFormFields } from "../utils/constants"
import type { IBookRoomPayload, IFormFields } from "../interfaces"
import axios from "axios"
import { useNavigate } from "react-router"

const BookRoom = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [formFields, setFormFields] = useState(BookFormFields)

  const handleChange = (value: string | Date, id: string) => {
    setFormFields((prev) => ({
      ...prev,
      [id]: { ...prev[id], value, errorMessage: "" },
    }))
  }

  const validateForm = () => {
    let isValid = true
    const updatedFields = { ...formFields }

    Object.entries(formFields).forEach(([key, value]) => {
      updatedFields[key] = {
        ...value,
        errorMessage: !value?.value ? "This field is required" : "",
      }
      if (!value?.value) isValid = false
    })

    setFormFields(updatedFields)
    return isValid
  }

  const handleSubmit = async () => {
    if (!validateForm()) return
    const body: IBookRoomPayload = {
      fullName: formFields.fullName.value as string,
      roomId: formFields.roomId.value as string,
      checkIn: (formFields.checkIn.value as Date).toISOString(),
      checkOut: (formFields.checkOut.value as Date).toISOString(),
    }

    setLoading(true)
    try {
      const response = await axios.post(`http://localhost:8000/booking`, body)
      console.log("response", response)
      if (response.data.success) {
        alert(response.data.message || "Room booked successful")
        navigate("/bookings")
      } else {
        alert(
          response.data.message || "Something went wrong. Please try again!"
        )
      }
    } catch {
      alert("Something went wrong. Please try again!")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold py-6">Book Room</h1>
      <div className="border border-gray-200 p-6 rounded-md shadow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.values(formFields).map((formData) => (
            <RenderFormFields
              key={formData.id}
              formData={formData}
              handleChange={handleChange}
            />
          ))}
        </div>
        <div className="flex justify-center py-6">
          <button
            className="bg-black text-gray-50 w-full py-2 rounded-md cursor-pointer"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Booking..." : "Book"}
          </button>
        </div>
      </div>
    </div>
  )
}

function RenderFormFields({
  formData,
  handleChange,
}: {
  formData: IFormFields
  handleChange: (value: string | Date, id: string) => void
}) {
  const renderForm = () => {
    if (formData.type === "date-picker") {
      return (
        <CustomDatepicker formField={formData} handleChange={handleChange} />
      )
    } else if (formData.type === "select") {
      return <Select formField={formData} handleChange={handleChange} />
    } else {
      return <Input formField={formData} handleChange={handleChange} />
    }
  }
  return <>{renderForm()}</>
}

export default BookRoom
