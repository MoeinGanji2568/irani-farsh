import { MdDeleteOutline, MdEdit } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import Modal from "../../ui/Modal";
import { useState } from "react";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { removeBookmarkCarpet } from "../../../services/api/carpets";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

const ButtonGroup = ({ rugId }: { rugId: string }) => {
  const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);
  const queryClient = useQueryClient();
  const { mutate: handleRemoveBookmarkCarpet } = useMutation({
    mutationFn: removeBookmarkCarpet,
    onSuccess: () => {
      toast.success("فرش با موفقیت از علاقه مندی ها حذف شد");
    },
    onError: () => {
      toast.error("خطا در حذف فرش از علاقه مندی ها");
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["favorite-carpets"] });
      setIsDeleteOpen(false);
    },
  });
  return (
    <div className="flex items-center gap-x-2 justify-center">
      <button className="text-rose-500" onClick={() => setIsDeleteOpen(true)}>
        <MdDeleteOutline />
      </button>
      <Modal
        title={`حذف فرش`}
        open={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
      >
        <ConfirmDelete
          resourceName={`فرش`}
          onClose={() => setIsDeleteOpen(false)}
          disabled={false}
          onConfirm={() => {
            handleRemoveBookmarkCarpet(Number(rugId));
          }}
        />
      </Modal>
      <button className="text-blue-500">
        <MdEdit />
      </button>
      <Link to={`/rug/${rugId}`} className="text-blue-500">
        <FaEye />
      </Link>
    </div>
  );
};

export default ButtonGroup;
