import { Link } from 'react-router-dom';
import { Header } from '../components/Header';

export function OrdersPage() {
  return (
    <>
      <Header />

      <main
        className="
          mx-auto
          mt-[90px]
          mb-[100px]
          w-full
          max-w-[850px]
          px-[20px]
        "
      >
        {/* Page Title */}
        <h1 className="mb-[25px] text-[26px] font-bold">
          Your Orders
        </h1>

        {/* Orders Grid */}
        <div className="grid grid-cols-1 gap-y-[50px]">

          {/* ==================== ORDER 1 ==================== */}
          <div>

            {/* Order Header */}
            <div
              className="
                flex
                items-center
                justify-between
                rounded-t-[5px]
                border
                border-[#dedede]
                bg-white
                px-[25px]
                py-[20px]

                max-[575px]:flex-col
                max-[575px]:items-start
                max-[575px]:gap-0
                max-[575px]:px-[15px]
                max-[575px]:py-[15px]
                max-[575px]:leading-[23px]
              "
            >

              {/* Left Section */}
              <div
                className="
                  flex
                  shrink-0

                  max-[575px]:flex-col
                "
              >

                {/* Order Date */}
                <div
                  className="
                    mr-[45px]

                    max-[575px]:mr-0
                    max-[575px]:grid
                    max-[575px]:grid-cols-[auto_1fr]
                  "
                >
                  <div className="font-bold max-[575px]:mr-[5px]">
                    Order Placed:
                  </div>

                  <div>
                    August 12
                  </div>
                </div>

                {/* Order Total */}
                <div
                  className="
                    mr-[45px]

                    max-[575px]:mr-0
                    max-[575px]:grid
                    max-[575px]:grid-cols-[auto_1fr]
                  "
                >
                  <div className="font-bold max-[575px]:mr-[5px]">
                    Total:
                  </div>

                  <div>
                    $35.06
                  </div>
                </div>

              </div>


              {/* Right Section */}
              <div
                className="
                  shrink

                  max-[575px]:grid
                  max-[575px]:grid-cols-[auto_1fr]
                "
              >
                <div className="font-bold max-[575px]:mr-[5px]">
                  Order ID:
                </div>

                <div className="break-all">
                  27cba69d-4c3d-4098-b42d-ac7fa62b7664
                </div>
              </div>

            </div>


            {/* Order Details */}
            <div
              className="
                grid
                grid-cols-[110px_1fr_220px]
                items-center
                gap-x-[35px]
                gap-y-[60px]
                rounded-b-[5px]
                border
                border-t-0
                border-[#dedede]
                px-[25px]
                py-[40px]

                max-[800px]:grid-cols-[110px_1fr]
                max-[800px]:gap-y-0
                max-[800px]:pb-[8px]

                max-[450px]:grid-cols-1
              "
            >

              {/* Product 1 Image */}
              <div className="text-center max-[450px]:mb-[25px]">
                <img
                  className="mx-auto max-h-[110px] max-w-[110px] max-[450px]:max-h-[150px] max-[450px]:max-w-[150px]"
                  src="images/products/athletic-cotton-socks-6-pairs.jpg"
                  alt="Black and Gray Athletic Cotton Socks"
                />
              </div>


              {/* Product 1 Details */}
              <div>

                <div className="mb-[5px] font-bold max-[450px]:mb-[10px]">
                  Black and Gray Athletic Cotton Socks - 6 Pairs
                </div>

                <div className="mb-[3px]">
                  Arriving on: August 15
                </div>

                <div className="mb-[8px] max-[450px]:mb-[15px]">
                  Quantity: 1
                </div>

                <button
                  className="
                    flex
                    h-[36px]
                    w-[140px]
                    items-center
                    justify-center
                    rounded-[5px]
                    bg-green-700
                    text-[14px]
                    text-white
                    hover:bg-green-800

                    max-[800px]:mb-[10px]
                    max-[450px]:mb-[15px]
                    max-[450px]:w-full
                  "
                >
                  <img
                    className="mr-[10px] w-[20px]"
                    src="images/icons/buy-again.png"
                    alt=""
                  />

                  <span>
                    Add to Cart
                  </span>
                </button>

              </div>


              {/* Product 1 Actions */}
              <div
                className="
                  self-start

                  max-[800px]:col-start-2
                  max-[800px]:mb-[30px]

                  max-[450px]:col-auto
                  max-[450px]:mb-[70px]
                "
              >
                <Link to="/tracking">
                  <button
                    className="
                      w-full
                      rounded-[5px]
                      bg-white
                      px-[8px]
                      py-[8px]
                      text-[14px]
                      text-black
                      shadow-sm
                      ring-1
                      ring-gray-300
                      hover:bg-gray-50

                      max-[800px]:w-[140px]

                      max-[450px]:w-full
                      max-[450px]:py-[12px]
                    "
                  >
                    Track package
                  </button>
                </Link>
              </div>


              {/* Product 2 Image */}
              <div className="text-center max-[450px]:mb-[25px]">
                <img
                  className="mx-auto max-h-[110px] max-w-[110px] max-[450px]:max-h-[150px] max-[450px]:max-w-[150px]"
                  src="images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg"
                  alt="Adults Plain Cotton T-Shirt"
                />
              </div>


              {/* Product 2 Details */}
              <div>

                <div className="mb-[5px] font-bold max-[450px]:mb-[10px]">
                  Adults Plain Cotton T-Shirt - 2 Pack
                </div>

                <div className="mb-[3px]">
                  Arriving on: August 19
                </div>

                <div className="mb-[8px] max-[450px]:mb-[15px]">
                  Quantity: 2
                </div>

                <button
                  className="
                    flex
                    h-[36px]
                    w-[140px]
                    items-center
                    justify-center
                    rounded-[5px]
                    bg-green-700
                    text-[14px]
                    text-white
                    hover:bg-green-800

                    max-[800px]:mb-[10px]
                    max-[450px]:mb-[15px]
                    max-[450px]:w-full
                  "
                >
                  <img
                    className="mr-[10px] w-[20px]"
                    src="images/icons/buy-again.png"
                    alt=""
                  />

                  <span>
                    Add to Cart
                  </span>
                </button>

              </div>


              {/* Product 2 Actions */}
              <div
                className="
                  self-start

                  max-[800px]:col-start-2
                  max-[800px]:mb-[30px]

                  max-[450px]:col-auto
                  max-[450px]:mb-[70px]
                "
              >
                <Link to="/tracking">
                  <button
                    className="
                      w-full
                      rounded-[5px]
                      bg-white
                      px-[8px]
                      py-[8px]
                      text-[14px]
                      text-black
                      shadow-sm
                      ring-1
                      ring-gray-300
                      hover:bg-gray-50

                      max-[800px]:w-[140px]

                      max-[450px]:w-full
                      max-[450px]:py-[12px]
                    "
                  >
                    Track package
                  </button>
                </Link>
              </div>

            </div>
          </div>


          {/* ==================== ORDER 2 ==================== */}
          <div>

            {/* Order Header */}
            <div
              className="
                flex
                items-center
                justify-between
                rounded-t-[5px]
                border
                border-[#dedede]
                bg-white
                px-[25px]
                py-[20px]

                max-[575px]:flex-col
                max-[575px]:items-start
                max-[575px]:px-[15px]
                max-[575px]:py-[15px]
                max-[575px]:leading-[23px]
              "
            >

              {/* Left Section */}
              <div
                className="
                  flex
                  shrink-0

                  max-[575px]:flex-col
                "
              >

                {/* Order Date */}
                <div
                  className="
                    mr-[45px]

                    max-[575px]:mr-0
                    max-[575px]:grid
                    max-[575px]:grid-cols-[auto_1fr]
                  "
                >
                  <div className="font-bold max-[575px]:mr-[5px]">
                    Order Placed:
                  </div>

                  <div>
                    June 10
                  </div>
                </div>

                {/* Order Total */}
                <div
                  className="
                    mr-[45px]

                    max-[575px]:mr-0
                    max-[575px]:grid
                    max-[575px]:grid-cols-[auto_1fr]
                  "
                >
                  <div className="font-bold max-[575px]:mr-[5px]">
                    Total:
                  </div>

                  <div>
                    $41.90
                  </div>
                </div>

              </div>


              {/* Right Section */}
              <div
                className="
                  shrink

                  max-[575px]:grid
                  max-[575px]:grid-cols-[auto_1fr]
                "
              >
                <div className="font-bold max-[575px]:mr-[5px]">
                  Order ID:
                </div>

                <div className="break-all">
                  b6b6c212-d30e-4d4a-805d-90b52ce6b37d
                </div>
              </div>

            </div>


            {/* Order Details */}
            <div
              className="
                grid
                grid-cols-[110px_1fr_220px]
                items-center
                gap-x-[35px]
                gap-y-[60px]
                rounded-b-[5px]
                border
                border-t-0
                border-[#dedede]
                px-[25px]
                py-[40px]

                max-[800px]:grid-cols-[110px_1fr]
                max-[800px]:gap-y-0
                max-[800px]:pb-[8px]

                max-[450px]:grid-cols-1
              "
            >

              {/* Product Image */}
              <div className="text-center max-[450px]:mb-[25px]">
                <img
                  className="mx-auto max-h-[110px] max-w-[110px] max-[450px]:max-h-[150px] max-[450px]:max-w-[150px]"
                  src="images/products/intermediate-composite-basketball.jpg"
                  alt="Intermediate Size Basketball"
                />
              </div>


              {/* Product Details */}
              <div>

                <div className="mb-[5px] font-bold max-[450px]:mb-[10px]">
                  Intermediate Size Basketball
                </div>

                <div className="mb-[3px]">
                  Arriving on: June 17
                </div>

                <div className="mb-[8px] max-[450px]:mb-[15px]">
                  Quantity: 2
                </div>

                <button
                  className="
                    flex
                    h-[36px]
                    w-[140px]
                    items-center
                    justify-center
                    rounded-[5px]
                    bg-green-700
                    text-[14px]
                    text-white
                    hover:bg-green-800

                    max-[800px]:mb-[10px]
                    max-[450px]:mb-[15px]
                    max-[450px]:w-full
                  "
                >
                  <img
                    className="mr-[10px] w-[20px]"
                    src="images/icons/buy-again.png"
                    alt=""
                  />

                  <span>
                    Add to Cart
                  </span>
                </button>

              </div>


              {/* Product Actions */}
              <div
                className="
                  self-start

                  max-[800px]:col-start-2
                  max-[800px]:mb-[30px]

                  max-[450px]:col-auto
                  max-[450px]:mb-[70px]
                "
              >
                <Link to="/tracking">
                  <button
                    className="
                      w-full
                      rounded-[5px]
                      bg-white
                      px-[8px]
                      py-[8px]
                      text-[14px]
                      text-black
                      shadow-sm
                      ring-1
                      ring-gray-300
                      hover:bg-gray-50

                      max-[800px]:w-[140px]

                      max-[450px]:w-full
                      max-[450px]:py-[12px]
                    "
                  >
                    Track package
                  </button>
                </Link>
              </div>

            </div>
          </div>

        </div>
      </main>
    </>
  );
}