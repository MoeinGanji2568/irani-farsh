import { MdDeleteOutline } from "react-icons/md";
import Button from "./Button";

interface ConfirmDeleteProps {
  resourceName: string;
  onClose: () => void;
  disabled: boolean;
  onConfirm: () => void;
}

function ConfirmDelete({
  resourceName,
  onClose,
  disabled,
  onConfirm,
}: ConfirmDeleteProps) {
  return (
    <div>
      <h2 className="font-bold text-base mb-8 text-secondary-700">
        آیا از حذف {resourceName} مطمین هستید؟
      </h2>
      <form action={onConfirm}>
        <div className="flex justify-between items-center gap-x-16">
          <Button
            className="flex-1"
            variant="secondary"
            onClick={onClose}
            type="button"
          >
            لغو
          </Button>
          <Button
            type="submit"
            onClick={onConfirm}
            disabled={disabled}
            variant="primary"
            className="flex gap-x-2 justify-center items-center flex-1"
          >
            <MdDeleteOutline className="w-5" />
            <span>حذف</span>
          </Button>
        </div>
      </form>
    </div>
  );
}
export default ConfirmDelete;
