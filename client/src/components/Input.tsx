import type { IFormFields } from "../interfaces"

interface IInputProps {
  formField: IFormFields
  handleChange: (value: string | Date, id: string) => void
}

const Input = ({ formField, handleChange }: IInputProps) => {
  return (
    <div className="flex flex-col gap-y-1">
      <label>{formField.label}</label>
      <input
        type="text"
        className={`border p-2 rounded-md ${
          formField.errorMessage ? " border-red-400" : "border-gray-200"
        }`}
        placeholder={formField.placeholder}
        value={formField.value as string}
        onChange={(e) => handleChange(e.target.value, formField.id)}
      />
      {formField?.errorMessage && (
        <p className="text-red-500">{formField.errorMessage}</p>
      )}
    </div>
  )
}

export default Input
