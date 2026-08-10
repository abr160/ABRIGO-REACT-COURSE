import { Link } from 'react-router-dom';

export function CheckoutPage() {
  return (
    <>
      {/* Checkout Header */}
      <header className="fixed top-0 left-0 right-0 z-[1000] flex h-[60px] justify-center bg-white px-[30px]">

        <div className="flex w-full max-w-[1100px] items-center">

          {/* Left Section */}
          <div className="w-[200px] max-[575px]:w-auto">

            <Link to="/">
              {/* Desktop Logo */}
              <img
                className="mt-0 h-[26px] max-[575px]:hidden"
                src="images/logo.png"
                alt="Logo"
              />

              {/* Mobile Logo */}
              <img
                className="hidden h-[26px] max-[575px]:inline-block"
                src="images/mobile-logo.png"
                alt="Mobile Logo"
              />
            </Link>

          </div>

          {/* Middle Section */}
          <div className="flex flex-1 shrink-0 justify-center text-center text-[22px] font-medium max-[1000px]:mr-[60px] max-[1000px]:text-[20px] max-[575px]:mr-[5px]">

            Checkout (
            
            <Link
              to="/"
              className="cursor-pointer text-green-700 no-underline hover:underline max-[1000px]:text-[20px]"
            >
              3 items
            </Link>

            )

          </div>

          {/* Right Section */}
          <div className="flex w-[200px] items-center justify-end text-right max-[1000px]:w-auto">

            <img
              className="h-[32px]"
              src="images/icons/checkout-lock-icon.png"
              alt="Secure checkout"
            />

          </div>

        </div>

      </header>


      {/* Checkout Page */}
      <main className="mx-auto mt-[140px] mb-[100px] max-w-[1100px] px-[30px]">

        {/* Page Title */}
        <h1 className="mb-[18px] text-[22px] font-bold">
          Review your order
        </h1>


        {/* Checkout Grid */}
        <div className="grid grid-cols-[1fr_350px] items-start gap-x-[12px] max-[1000px]:grid-cols-1">


          {/* Order Summary */}
          <div className="max-[1000px]:mx-auto max-[1000px]:w-full max-[1000px]:max-w-[500px]">


            {/* Cart Item 1 */}
            <div className="mb-[12px] rounded-[4px] border border-[#dedede] p-[18px]">

              <div className="mb-[22px] mt-[5px] text-[19px] font-bold text-green-700">
                Delivery date: Tuesday, June 21
              </div>


              <div className="grid grid-cols-[100px_1fr_1fr] gap-x-[25px] max-[1000px]:grid-cols-[100px_1fr] max-[1000px]:gap-y-[30px]">

                {/* Product Image */}
                <img
                  className="mx-auto max-h-[120px] max-w-full"
                  src="images/products/athletic-cotton-socks-6-pairs.jpg"
                  alt="Black and Gray Athletic Cotton Socks"
                />


                {/* Product Details */}
                <div>

                  <div className="mb-[8px] font-bold">
                    Black and Gray Athletic Cotton Socks - 6 Pairs
                  </div>

                  <div className="mb-[5px] font-bold">
                    $10.90
                  </div>

                  <div>
                    Quantity: 2

                    <button className="ml-[8px] text-green-700 hover:underline">
                      Update
                    </button>

                    <button className="ml-[8px] text-green-700 hover:underline">
                      Delete
                    </button>
                  </div>

                </div>


                {/* Delivery Options */}
                <div className="max-[1000px]:col-span-2">

                  <div className="mb-[10px] font-bold">
                    Choose a delivery option:
                  </div>


                  {/* Option 1 */}
                  <label className="mb-[12px] grid cursor-pointer grid-cols-[24px_1fr]">

                    <input
                      type="radio"
                      name="delivery-option-1"
                      defaultChecked
                      className="mt-[3px] mr-[5px] cursor-pointer"
                    />

                    <div>

                      <div className="mb-[3px] font-medium">
                        Tuesday, June 21
                      </div>

                      <div className="text-[15px] text-[#787878]">
                        FREE Shipping
                      </div>

                    </div>

                  </label>


                  {/* Option 2 */}
                  <label className="mb-[12px] grid cursor-pointer grid-cols-[24px_1fr]">

                    <input
                      type="radio"
                      name="delivery-option-1"
                      className="mt-[3px] mr-[5px] cursor-pointer"
                    />

                    <div>

                      <div className="mb-[3px] font-medium">
                        Wednesday, June 15
                      </div>

                      <div className="text-[15px] text-[#787878]">
                        $4.99 - Shipping
                      </div>

                    </div>

                  </label>


                  {/* Option 3 */}
                  <label className="mb-[12px] grid cursor-pointer grid-cols-[24px_1fr]">

                    <input
                      type="radio"
                      name="delivery-option-1"
                      className="mt-[3px] mr-[5px] cursor-pointer"
                    />

                    <div>

                      <div className="mb-[3px] font-medium">
                        Monday, June 13
                      </div>

                      <div className="text-[15px] text-[#787878]">
                        $9.99 - Shipping
                      </div>

                    </div>

                  </label>

                </div>

              </div>

            </div>


            {/* Cart Item 2 */}
            <div className="mb-[12px] rounded-[4px] border border-[#dedede] p-[18px]">

              <div className="mb-[22px] mt-[5px] text-[19px] font-bold text-green-700">
                Delivery date: Wednesday, June 15
              </div>


              <div className="grid grid-cols-[100px_1fr_1fr] gap-x-[25px] max-[1000px]:grid-cols-[100px_1fr] max-[1000px]:gap-y-[30px]">

                {/* Product Image */}
                <img
                  className="mx-auto max-h-[120px] max-w-full"
                  src="images/products/intermediate-composite-basketball.jpg"
                  alt="Intermediate Size Basketball"
                />


                {/* Product Details */}
                <div>

                  <div className="mb-[8px] font-bold">
                    Intermediate Size Basketball
                  </div>

                  <div className="mb-[5px] font-bold">
                    $20.95
                  </div>

                  <div>
                    Quantity: 1

                    <button className="ml-[8px] text-green-700 hover:underline">
                      Update
                    </button>

                    <button className="ml-[8px] text-green-700 hover:underline">
                      Delete
                    </button>
                  </div>

                </div>


                {/* Delivery Options */}
                <div className="max-[1000px]:col-span-2">

                  <div className="mb-[10px] font-bold">
                    Choose a delivery option:
                  </div>


                  {/* Option 1 */}
                  <label className="mb-[12px] grid cursor-pointer grid-cols-[24px_1fr]">

                    <input
                      type="radio"
                      name="delivery-option-2"
                      className="mt-[3px] mr-[5px] cursor-pointer"
                    />

                    <div>

                      <div className="mb-[3px] font-medium">
                        Tuesday, June 21
                      </div>

                      <div className="text-[15px] text-[#787878]">
                        FREE Shipping
                      </div>

                    </div>

                  </label>


                  {/* Option 2 */}
                  <label className="mb-[12px] grid cursor-pointer grid-cols-[24px_1fr]">

                    <input
                      type="radio"
                      name="delivery-option-2"
                      defaultChecked
                      className="mt-[3px] mr-[5px] cursor-pointer"
                    />

                    <div>

                      <div className="mb-[3px] font-medium">
                        Wednesday, June 15
                      </div>

                      <div className="text-[15px] text-[#787878]">
                        $4.99 - Shipping
                      </div>

                    </div>

                  </label>


                  {/* Option 3 */}
                  <label className="mb-[12px] grid cursor-pointer grid-cols-[24px_1fr]">

                    <input
                      type="radio"
                      name="delivery-option-2"
                      className="mt-[3px] mr-[5px] cursor-pointer"
                    />

                    <div>

                      <div className="mb-[3px] font-medium">
                        Monday, June 13
                      </div>

                      <div className="text-[15px] text-[#787878]">
                        $9.99 - Shipping
                      </div>

                    </div>

                  </label>

                </div>

              </div>

            </div>

          </div>


          {/* Payment Summary */}
          <div className="rounded-[4px] border border-[#dedede] px-[18px] pt-[18px] pb-[5px] max-[1000px]:order-first max-[1000px]:mb-[12px]">

            <div className="mb-[12px] text-[18px] font-bold">
              Payment Summary
            </div>


            {/* Items */}
            <div className="mb-[9px] grid grid-cols-[1fr_auto] text-[15px]">
              <div>
                Items (3):
              </div>

              <div className="text-right">
                $42.75
              </div>
            </div>


            {/* Shipping */}
            <div className="mb-[9px] grid grid-cols-[1fr_auto] text-[15px]">
              <div>
                Shipping &amp; handling:
              </div>

              <div className="text-right">
                $4.99
              </div>
            </div>


            {/* Subtotal */}
            <div className="mb-[9px] grid grid-cols-[1fr_auto] border-t border-[#dedede] pt-[9px] text-[15px]">

              <div>
                Total before tax:
              </div>

              <div className="text-right">
                $47.74
              </div>

            </div>


            {/* Tax */}
            <div className="mb-[9px] grid grid-cols-[1fr_auto] text-[15px]">

              <div>
                Estimated tax (10%):
              </div>

              <div className="text-right">
                $4.77
              </div>

            </div>


            {/* Order Total */}
            <div className="grid grid-cols-[1fr_auto] border-t border-[#dedede] pt-[18px] text-[18px] font-bold text-green-700">

              <div>
                Order total:
              </div>

              <div className="text-right">
                $52.51
              </div>

            </div>


            {/* Place Order Button */}
            <button className="mb-[19px] mt-[20px] w-full rounded-[5px] bg-green-700 py-[12px] font-medium text-white transition hover:bg-green-800">
              Place your order
            </button>

          </div>

        </div>

      </main>
    </>
  );
}