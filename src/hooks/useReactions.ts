import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { bookmarkCarpet, likeCarpet } from "../services/api/carpets";

interface ReactionOptions {
  onSuccess?: () => void;
  onError?: () => void;
}

export const useReactions = (options?: ReactionOptions) => {
  const queryClient = useQueryClient();

  const invalidateQueries = (id: number) => {
    // Invalidate all carpets queries
    queryClient.invalidateQueries({ queryKey: ["carpets"] });
    // Invalidate specific carpet detail query
    queryClient.invalidateQueries({ queryKey: ["carpet", id.toString()] });
    // Also invalidate with number id
    queryClient.invalidateQueries({ queryKey: ["carpet", id] });
  };

  return useMutation({
    mutationFn: (id: number) => likeCarpet(id),
    onSuccess: (_, id) => {
      invalidateQueries(id);
      toast.success("با موفقیت لایک شد");
      options?.onSuccess?.();
    },
    onError: () => {
      toast.error("خطا در لایک کردن");
      options?.onError?.();
    },
  });
};

export const useBookmark = (options?: ReactionOptions) => {
  const queryClient = useQueryClient();

  const invalidateQueries = (id: number) => {
    // Invalidate all carpets queries
    queryClient.invalidateQueries({ queryKey: ["carpets"] });
    // Invalidate specific carpet detail query
    queryClient.invalidateQueries({ queryKey: ["carpet", id.toString()] });
    // Also invalidate with number id
    queryClient.invalidateQueries({ queryKey: ["carpet", id] });
  };

  return useMutation({
    mutationFn: (id: number) => bookmarkCarpet(id),
    onSuccess: (_, id) => {
      invalidateQueries(id);
      toast.success("با موفقیت ذخیره شد");
      options?.onSuccess?.();
    },
    onError: () => {
      toast.error("خطا در ذخیره کردن");
      options?.onError?.();
    },
  });
};
