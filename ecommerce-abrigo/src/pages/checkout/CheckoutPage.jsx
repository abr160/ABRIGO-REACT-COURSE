import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { OrderSummary } from './OrderSummary';
import { PaymentSummary } from './PaymentSummary';

export function CheckoutPage({ cart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);

  useEffect(() => {
    const fetchCheckoutData = async () => {
      try {
        // Get delivery options
        let response = await axios.get(
          '/api/delivery-options?expand=estimatedDeliveryTime'
        );

        setDeliveryOptions(response.data);

        // Get payment summary
        response = await axios.get('/api/payment-summary');

        setPaymentSummary(response.data);
      } catch (error) {
        console.error('Error fetching checkout data:', error);
      }
    };

    fetchCheckoutData();
  }, []);

  return (
    <>
      {/* Checkout Header */}
      <header className="fixed top-0 left-0 right-0 z-1000 flex h-15 justify-center bg-white px-7.5">
        <div className="flex w-full max-w-275 items-center">

          {/* Left Section */}
          <div className="w-50 max-[575px]:w-auto">
            <Link to="/">
              {/* Desktop Logo */}
              <img
                className="mt-0 h-6.5 max-[575px]:hidden"
                src="images/logo.png"
                alt="Logo"
              />

              {/* Mobile Logo */}
              <img
                className="hidden h-6.5 max-[575px]:inline-block"
                src="images/mobile-logo.png"
                alt="Mobile Logo"
              />
            </Link>
          </div>

          {/* Middle Section */}
          <div className="flex flex-1 shrink-0 justify-center text-center text-[22px] font-medium max-[1000px]:mr-15 max-[1000px]:text-xl max-[575px]:mr-1.25">
            Checkout (
            
            <Link
              to="/"
              className="cursor-pointer text-green-700 no-underline hover:underline max-[1000px]:text-xl"
            >
              {cart?.length || 0} items
            </Link>

            )
          </div>

          {/* Right Section */}
          <div className="flex w-50 items-center justify-end text-right max-[1000px]:w-auto">
            <img
              className="h-8"
              src="images/icons/checkout-lock-icon.png"
              alt="Secure checkout"
            />
          </div>

        </div>
      </header>

      {/* Checkout Page */}
      <main className="mx-auto mt-35 mb-25 max-w-275 px-7.5">

        {/* Page Title */}
        <h1 className="mb-4.5 text-[22px] font-bold">
          Review your order
        </h1>

        {/* Checkout Grid */}
        <div className="grid grid-cols-[1fr_350px] items-start gap-x-3 max-[1000px]:grid-cols-1">

          {/* Order Summary */}
          <div className="max-[1000px]:mx-auto max-[1000px]:w-full max-[1000px]:max-w-125">
            <OrderSummary
              cart={cart}
              deliveryOptions={deliveryOptions}
            />
          </div>

          {/* Payment Summary */}
          <div className="max-[1000px]:order-first max-[1000px]:mb-3">
            <PaymentSummary
              paymentSummary={paymentSummary}
            />
          </div>

        </div>
      </main>
    </>
  );
}

