import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import type { IFormFields } from "../interfaces"

interface ICustomDatepickerProps {
  formField: IFormFields
  handleChange: (value: string | Date, id: string) => void
}

const CustomDatepicker = ({
  formField,
  handleChange,
}: ICustomDatepickerProps) => {
  return (
    <div className="flex flex-col py-1">
      <label>{formField.label}</label>
      <DatePicker
        className={`border p-2 rounded-md w-full ${
          formField.errorMessage ? " border-red-400" : "border-gray-200"
        }`}
        selected={formField?.value ? new Date(formField.value) : new Date()}
        onChange={(date) => handleChange(date as Date, formField.id)}
      />
      {formField?.errorMessage && (
        <p className="text-red-500">{formField.errorMessage}</p>
      )}
    </div>
  )
}

export default CustomDatepicker
