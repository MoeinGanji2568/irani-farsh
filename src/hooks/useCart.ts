import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { getCart, addToCart, removeFromCart } from "../services/api/carpets";

export interface CartItem {
  id: number;
  carpet: {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    size: string;
    color: string;
    shape: string;
    quality: string;
    seller: string;
    rating: string;
    category: {
      id: number;
      name: string;
      description: string;
      image: string;
    };
  };
  quantity: number;
}

export const useCart = () => {
  const queryClient = useQueryClient();

  // Get cart data
  const {
    data: cartResponse,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
  });

  // Extract cart items from API response
  const cartItems = cartResponse?.items || [];

  // Add to cart mutation
  const addToCartMutation = useMutation({
    mutationFn: ({ id, quantity }: { id: number; quantity: number }) =>
      addToCart(id, quantity),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      toast.success("محصول به سبد خرید اضافه شد");
    },
    onError: () => {
      toast.error("خطا در اضافه کردن به سبد خرید");
    },
  });

  // Remove from cart mutation
  const removeFromCartMutation = useMutation({
    mutationFn: removeFromCart,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      toast.success("محصول از سبد خرید حذف شد");
    },
    onError: () => {
      toast.error("خطا در حذف از سبد خرید");
    },
  });

  // Update quantity mutation
  const updateQuantityMutation = useMutation({
    mutationFn: ({ id, quantity }: { id: number; quantity: number }) =>
      addToCart(id, quantity),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: () => {
      toast.error("خطا در بروزرسانی تعداد");
    },
  });

  // Calculate totals
  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total: number, item: CartItem) =>
        total + item.carpet.price * item.quantity,
      0
    );
  };

  const calculateShipping = () => {
    return cartItems.length > 0 ? 150000 : 0;
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateShipping();
  };

  // Format price helper
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fa-IR").format(price) + " تومان";
  };

  return {
    cartItems,
    isLoading,
    error,
    refetch,
    addToCart: addToCartMutation.mutate,
    removeFromCart: removeFromCartMutation.mutate,
    updateQuantity: updateQuantityMutation.mutate,
    isAddingToCart: addToCartMutation.isPending,
    isRemovingFromCart: removeFromCartMutation.isPending,
    isUpdatingQuantity: updateQuantityMutation.isPending,
    calculateSubtotal,
    calculateShipping,
    calculateTotal,
    formatPrice,
  };
};
