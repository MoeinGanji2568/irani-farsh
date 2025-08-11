import React from "react";
import Button from "../../ui/Button";

interface EmptyCartProps {
  onStartShopping: () => void;
}

const EmptyCart: React.FC<EmptyCartProps> = ({ onStartShopping }) => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="holder">
        <div className="text-center py-16">
          <div className="w-24 h-24 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
            <svg
              className="w-12 h-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            سبد خرید شما خالی است
          </h2>
          <p className="text-gray-600 mb-8">
            محصولات مورد نظر خود را به سبد خرید اضافه کنید
          </p>
          <Button
            variant="primary"
            className="px-8 py-3"
            onClick={onStartShopping}
          >
            شروع خرید
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
