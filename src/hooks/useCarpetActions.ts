import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import {
  bookmarkCarpet,
  likeCarpet,
  removeLikeCarpet,
  removeBookmarkCarpet,
} from "../services/api/carpets";

interface ActionOptions {
  onSuccess?: () => void;
  onError?: () => void;
}

interface CarpetData {
  data: {
    id: number;
    isLike: boolean;
    isFavorite: boolean;
    [key: string]: unknown;
  };
}

export const useCarpetActions = (options?: ActionOptions) => {
  const queryClient = useQueryClient();

  const getQueryKeys = (id: number) => ({
    carpet: ["carpet", id],
    carpetString: ["carpet", id.toString()],
    carpets: ["carpets"],
  });

  const invalidateAndRefetch = (id: number) => {
    const keys = getQueryKeys(id);

    // Invalidate queries
    queryClient.invalidateQueries({ queryKey: keys.carpets });
    queryClient.invalidateQueries({ queryKey: keys.carpet });
    queryClient.invalidateQueries({ queryKey: keys.carpetString });

    // Force refetch
    queryClient.refetchQueries({ queryKey: keys.carpet });
    queryClient.refetchQueries({ queryKey: keys.carpetString });
  };

  const createOptimisticUpdate = (field: "isLike" | "isFavorite") => {
    return async (id: number) => {
      const keys = getQueryKeys(id);

      // Cancel outgoing queries
      await queryClient.cancelQueries({ queryKey: keys.carpet });
      await queryClient.cancelQueries({ queryKey: keys.carpetString });

      // Get previous data
      const previousCarpet = queryClient.getQueryData<CarpetData>(keys.carpet);
      const previousCarpetString = queryClient.getQueryData<CarpetData>(
        keys.carpetString
      );

      // Optimistic update
      const updateData = (old: CarpetData | undefined) => {
        if (!old) return old;
        return {
          ...old,
          data: { ...old.data, [field]: !old.data[field] },
        };
      };

      if (previousCarpet) {
        queryClient.setQueryData<CarpetData>(keys.carpet, updateData);
      }
      if (previousCarpetString) {
        queryClient.setQueryData<CarpetData>(keys.carpetString, updateData);
      }

      return { previousCarpet, previousCarpetString };
    };
  };

  const createRollback = () => {
    return (
      id: number,
      context: {
        previousCarpet?: CarpetData;
        previousCarpetString?: CarpetData;
      }
    ) => {
      const keys = getQueryKeys(id);

      if (context.previousCarpet) {
        queryClient.setQueryData(keys.carpet, context.previousCarpet);
      }
      if (context.previousCarpetString) {
        queryClient.setQueryData(
          keys.carpetString,
          context.previousCarpetString
        );
      }
    };
  };

  const likeMutation = useMutation({
    mutationFn: likeCarpet,
    onMutate: createOptimisticUpdate("isLike"),
    onSuccess: (_, id) => {
      invalidateAndRefetch(id);
      toast.success("با موفقیت لایک شد");
      options?.onSuccess?.();
    },
    onError: (err, id, context) => {
      createRollback()(id, context || {});
      toast.error("خطا در لایک کردن");
      options?.onError?.();
    },
  });

  const removeLikeMutation = useMutation({
    mutationFn: removeLikeCarpet,
    onMutate: createOptimisticUpdate("isLike"),
    onSuccess: (_, id) => {
      invalidateAndRefetch(id);
      toast.success("لایک حذف شد");
      options?.onSuccess?.();
    },
    onError: (err, id, context) => {
      createRollback()(id, context || {});
      toast.error("خطا در حذف لایک");
      options?.onError?.();
    },
  });

  const bookmarkMutation = useMutation({
    mutationFn: bookmarkCarpet,
    onMutate: createOptimisticUpdate("isFavorite"),
    onSuccess: (_, id) => {
      invalidateAndRefetch(id);
      toast.success("با موفقیت ذخیره شد");
      options?.onSuccess?.();
    },
    onError: (err, id, context) => {
      createRollback()(id, context || {});
      toast.error("خطا در ذخیره کردن");
      options?.onError?.();
    },
  });

  const removeBookmarkMutation = useMutation({
    mutationFn: removeBookmarkCarpet,
    onMutate: createOptimisticUpdate("isFavorite"),
    onSuccess: (_, id) => {
      invalidateAndRefetch(id);
      toast.success("ذخیره حذف شد");
      options?.onSuccess?.();
    },
    onError: (err, id, context) => {
      createRollback()(id, context || {});
      toast.error("خطا در حذف ذخیره");
      options?.onError?.();
    },
  });

  return {
    like: likeMutation.mutate,
    removeLike: removeLikeMutation.mutate,
    bookmark: bookmarkMutation.mutate,
    removeBookmark: removeBookmarkMutation.mutate,
    isLiking: likeMutation.isPending,
    isRemovingLike: removeLikeMutation.isPending,
    isBookmarking: bookmarkMutation.isPending,
    isRemovingBookmark: removeBookmarkMutation.isPending,
    likeError: likeMutation.error,
    removeLikeError: removeLikeMutation.error,
    bookmarkError: bookmarkMutation.error,
    removeBookmarkError: removeBookmarkMutation.error,
  };
};
