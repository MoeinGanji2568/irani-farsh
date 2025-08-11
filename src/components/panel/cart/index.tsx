import React from "react";
import { useCart } from "../../../hooks/useCart";
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";
import EmptyCart from "./EmptyCart";

const Cart: React.FC = () => {
  const {
    cartItems,
    isLoading,
    error,
    removeFromCart,
    updateQuantity,
    isRemovingFromCart,
    isUpdatingQuantity,
    calculateSubtotal,
    calculateShipping,
    calculateTotal,
    formatPrice,
  } = useCart();

  const handleCheckout = () => {
    // TODO: Implement checkout logic
    console.log("Proceeding to checkout...");
  };

  const handleContinueShopping = () => {
    // TODO: Navigate to products page
    console.log("Continue shopping...");
  };

  const handleStartShopping = () => {
    // TODO: Navigate to products page
    console.log("Start shopping...");
  };

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="holder">
          <div className="text-center py-16">
            <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">در حال بارگذاری سبد خرید...</p>
          </div>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="holder">
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
              <svg
                className="w-12 h-12 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              خطا در بارگذاری سبد خرید
            </h2>
            <p className="text-gray-600 mb-8">
              متأسفانه مشکلی در بارگذاری سبد خرید پیش آمده است
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              تلاش مجدد
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Show empty cart
  if (cartItems.length === 0) {
    return <EmptyCart onStartShopping={handleStartShopping} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="holder">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">سبد خرید</h1>
          <p className="text-gray-600">
            تعداد {cartItems.length} محصول در سبد خرید شما
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  محصولات انتخاب شده
                </h2>
              </div>

              <div className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onUpdateQuantity={updateQuantity}
                    onRemove={removeFromCart}
                    formatPrice={formatPrice}
                    isUpdatingQuantity={isUpdatingQuantity}
                    isRemoving={isRemovingFromCart}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <OrderSummary
              subtotal={calculateSubtotal()}
              shipping={calculateShipping()}
              total={calculateTotal()}
              formatPrice={formatPrice}
              onCheckout={handleCheckout}
              onContinueShopping={handleContinueShopping}
              isLoading={isUpdatingQuantity || isRemovingFromCart}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
