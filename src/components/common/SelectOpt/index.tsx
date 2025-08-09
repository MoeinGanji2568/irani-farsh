import { FieldValues, UseFormRegister, Path } from "react-hook-form";

interface RTHSelectOptionProps<T extends FieldValues = FieldValues> {
  label: string;
  id: string;
  name: Path<T>;
  options: { value: string; label: string }[];
  register: UseFormRegister<T>;
  disabled?: boolean;
}

const RTHSelectOption = <T extends FieldValues = FieldValues>({
  label,
  id,
  name,
  options,
  register,
  disabled,
}: RTHSelectOptionProps<T>) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {label}
      </label>
      <select
        id={id}
        {...register(name)}
        className={`w-full rounded-md border p-2 my-1 ${
          disabled
            ? "border-gray-300 bg-gray-100 text-gray-500 cursor-not-allowed"
            : "border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        }`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RTHSelectOption;
