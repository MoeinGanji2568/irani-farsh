import React from "react";
import Button from "../../ui/Button";

interface OrderSummaryProps {
  subtotal: number;
  shipping: number;
  total: number;
  formatPrice: (price: number) => string;
  onCheckout: () => void;
  onContinueShopping: () => void;
  isLoading?: boolean;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  subtotal,
  shipping,
  total,
  formatPrice,
  onCheckout,
  onContinueShopping,
  isLoading = false,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-8">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">خلاصه سفارش</h2>

      <div className="space-y-4 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">جمع کل محصولات:</span>
          <span className="font-medium">{formatPrice(subtotal)}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-600">هزینه ارسال:</span>
          <span className="font-medium">{formatPrice(shipping)}</span>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-gray-900">
              مبلغ قابل پرداخت:
            </span>
            <span className="text-xl font-bold text-gray-900">
              {formatPrice(total)}
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <Button
          variant="primary"
          className="w-full py-4 text-lg font-semibold"
          onClick={onCheckout}
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="flex items-center justify-center gap-2">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              در حال پردازش...
            </div>
          ) : (
            "تکمیل خرید"
          )}
        </Button>

        <Button
          variant="outline"
          className="w-full py-3"
          onClick={onContinueShopping}
          disabled={isLoading}
        >
          ادامه خرید
        </Button>
      </div>

      {/* Additional Info */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-medium text-gray-900 mb-2">اطلاعات مهم:</h3>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• ارسال رایگان برای خرید بالای ۵ میلیون تومان</li>
          <li>• امکان بازگشت تا ۷ روز پس از تحویل</li>
          <li>• پشتیبانی ۲۴/۷</li>
        </ul>
      </div>
    </div>
  );
};

export default OrderSummary;
