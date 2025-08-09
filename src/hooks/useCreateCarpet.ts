import { useMutation } from "@tanstack/react-query";
import { CreateCarpet } from "../types/carpets/createCarpet.types";
import { createCarpet } from "../services/api/carpets";
import { toast } from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";

function useCreateCarpet() {
  const queryClient = useQueryClient();
  const { mutate: createCarpetMutation, isPending } = useMutation({
    mutationFn: (data: CreateCarpet) => createCarpet(data),
    onSuccess: () => {
      toast.success("فرش با موفقیت ایجاد شد");
      queryClient.invalidateQueries({ queryKey: ["carpets"] });
      queryClient.invalidateQueries({ queryKey: ["carpets-detail"] });
    },
    onError: () => {
      toast.error("فرش با موفقیت ایجاد نشد");
    },
  });

  return { createCarpetMutation, isPending };
}

export default useCreateCarpet;
