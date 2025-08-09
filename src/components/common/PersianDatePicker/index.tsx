import { WheelDatePicker } from "@buildix/wheel-datepicker";
import "@buildix/wheel-datepicker/dist/index.css";

interface PersianDatePickerProps {
  label: string;
  value?: string;
  onChange?: (date: string) => void;
}

const PersianDatePicker = ({
  label,
  value,
  onChange,
}: PersianDatePickerProps) => {
  return (
    <div>
      <label
        htmlFor="date"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {label}
      </label>
      <WheelDatePicker
        itemClassName={`w-full rounded-md border my-1 max-h-[43px]`}
        className="max-h-[43px]"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default PersianDatePicker;
