import { FieldValues, UseFormRegister } from "react-hook-form";

export interface RTHTextFieldProps<T extends FieldValues> {
  label: string;
  placeholder: string;
  type: string;
  id: string;
  name: string;
  defaultValue?: string;
  disabled?: boolean;
  register?: UseFormRegister<T>;
}
