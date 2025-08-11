import React from "react";
import { CartItem as CartItemType } from "../../../hooks/useCart";
import { onErrorImage } from "../../../hooks/OnErrorImage";

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
  formatPrice: (price: number) => string;
  isUpdatingQuantity: boolean;
  isRemoving: boolean;
}

const CartItem: React.FC<CartItemProps> = ({
  item,
  onUpdateQuantity,
  onRemove,
  formatPrice,
  isUpdatingQuantity,
  isRemoving,
}) => {
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1) return;
    onUpdateQuantity(item.carpet.id, newQuantity);
  };

  return (
    <div className="p-6 border-b border-gray-200 last:border-b-0">
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Product Image */}
        <div className="flex-shrink-0">
          <img
            src={item.carpet.image}
            alt={item.carpet.name}
            loading="lazy"
            onError={onErrorImage}
            className="w-24 h-24 object-cover rounded-lg border border-gray-200"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.carpet.name}
              </h3>
              <div className="text-sm text-gray-600 space-y-1">
                <p>اندازه: {item.carpet.size}</p>
                <p>رنگ: {item.carpet.color}</p>
                <p>کیفیت: {item.carpet.quality}</p>
                <p>فروشنده: {item.carpet.seller}</p>
              </div>
            </div>

            {/* Price */}
            <div className="text-right">
              <p className="text-lg font-bold text-gray-900">
                {formatPrice(item.carpet.price)}
              </p>
              <p className="text-sm text-gray-500">قیمت واحد</p>
            </div>
          </div>

          {/* Quantity Controls and Actions */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mt-4">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-gray-700">تعداد:</span>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => handleQuantityChange(item.quantity - 1)}
                  className="px-3 py-2 text-gray-600 hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={item.quantity <= 1 || isUpdatingQuantity}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 12H4"
                    />
                  </svg>
                </button>
                <span className="px-4 py-2 text-gray-900 font-medium min-w-[3rem] text-center">
                  {isUpdatingQuantity ? (
                    <div className="w-4 h-4 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin mx-auto"></div>
                  ) : (
                    item.quantity
                  )}
                </span>
                <button
                  onClick={() => handleQuantityChange(item.quantity + 1)}
                  className="px-3 py-2 text-gray-600 hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isUpdatingQuantity}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-lg font-bold text-gray-900">
                  {formatPrice(item.carpet.price * item.quantity)}
                </p>
                <p className="text-sm text-gray-500">قیمت کل</p>
              </div>

              <button
                onClick={() => onRemove(item.carpet.id)}
                className="text-red-600 hover:text-red-800 transition-colors p-2 disabled:opacity-50 disabled:cursor-not-allowed"
                title="حذف از سبد خرید"
                disabled={isRemoving}
              >
                {isRemoving ? (
                  <div className="w-5 h-5 border-2 border-red-300 border-t-red-600 rounded-full animate-spin"></div>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
