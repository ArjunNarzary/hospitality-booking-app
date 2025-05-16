import useQuery from "../hooks/useQuery"
import type { IFormFields, IRoom, IRoomResponse } from "../interfaces"

interface ISelectProps {
  formField: IFormFields
  handleChange: (value: string | Date, id: string) => void
}

const Select = ({ formField, handleChange }: ISelectProps) => {
  const { data, loading } = useQuery<IRoomResponse>("/rooms-available")
  return (
    <div className="flex flex-col py-1">
      <label>{formField.label}</label>
      <select
        disabled={loading}
        className={`border p-2 rounded-md w-full ${
          formField.errorMessage ? " border-red-400" : "border-gray-200"
        }`}
        onChange={(e) => handleChange(e.target.value as string, formField.id)}
        value={formField.value as string}
      >
        {formField.placeholder && <option>{formField.placeholder}</option>}
        {data?.rooms.map((room: IRoom) => (
          <option key={room.id} value={room.id}>
            {room.name}
          </option>
        ))}
      </select>
      {formField?.errorMessage && (
        <p className="text-red-500">{formField.errorMessage}</p>
      )}
    </div>
  )
}

export default Select
