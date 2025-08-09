import { FieldValues, Path, useForm } from "react-hook-form";
import { RTHTextFieldProps } from "./Input.types";

const RTHTextField = <T extends FieldValues>({
  label,
  placeholder,
  type,
  id,
  name,
  defaultValue,
  disabled,
  register,
}: RTHTextFieldProps<T>) => {
  const {
    formState: { errors },
  } = useForm();

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full rounded-md border p-2 my-1 ${
          disabled
            ? "border-gray-300 bg-gray-100 text-gray-500 cursor-not-allowed"
            : "border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        }`}
        {...register?.(name as Path<T>)}
        defaultValue={defaultValue}
        disabled={disabled}
      />
      {errors[name] && (
        <p className="text-rose-500 text-sm mt-1">
          {errors[name]?.message as string}
        </p>
      )}
    </div>
  );
};

export default RTHTextField;
