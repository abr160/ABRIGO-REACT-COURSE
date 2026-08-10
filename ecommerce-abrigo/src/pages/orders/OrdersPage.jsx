import axios from 'axios';
import dayjs from 'dayjs';
import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { formatMoney } from '../../utils/money';

export function OrdersPage({ cart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const response = await axios.get('/api/orders?expand=products');
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    getOrders();
  }, []);

  return (
    <>
      {/* Header */}
      <Header cart={cart} />

      {/* Orders Page */}
      <main className="mx-auto mt-22.5 mb-25 w-full max-w-212.5 px-5">

        {/* Page Title */}
        <h1 className="mb-6.25 text-[26px] font-bold">
          Your Orders
        </h1>

        {/* Orders Grid */}
        <div className="grid grid-cols-1 gap-y-12.5">

          {orders.map((order) => (
            <div key={order.id}>

              {/* Order Header */}
              <div
                className="
                  flex
                  items-center
                  justify-between
                  rounded-t-1.25
                  border
                  border-[#dedede]
                  bg-white
                  px-6.25
                  py-5

                  max-[575px]:flex-col
                  max-[575px]:items-start
                  max-[575px]:gap-0
                  max-[575px]:px-3.75
                  max-[575px]:py-3.75
                  max-[575px]:leading-5.75
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
                      mr-11.25

                      max-[575px]:mr-0
                      max-[575px]:grid
                      max-[575px]:grid-cols-[auto_1fr]
                    "
                  >
                    <div className="font-bold max-[575px]:mr-1.25">
                      Order Placed:
                    </div>

                    <div>
                      {dayjs(order.orderTimeMs).format('MMMM D')}
                    </div>
                  </div>

                  {/* Order Total */}
                  <div
                    className="
                      mr-11.25

                      max-[575px]:mr-0
                      max-[575px]:grid
                      max-[575px]:grid-cols-[auto_1fr]
                    "
                  >
                    <div className="font-bold max-[575px]:mr-1.25">
                      Total:
                    </div>

                    <div>
                      {formatMoney(order.totalCostCents)}
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
                  <div className="font-bold max-[575px]:mr-1.25">
                    Order ID:
                  </div>

                  <div className="break-all">
                    {order.id}
                  </div>
                </div>

              </div>

              {/* Order Details */}
              <div
                className="
                  grid
                  grid-cols-[110px_1fr_220px]
                  items-center
                  gap-x-8.75
                  gap-y-15
                  rounded-b-1.25
                  border
                  border-t-0
                  border-[#dedede]
                  px-6.25
                  py-10

                  max-[800px]:grid-cols-[110px_1fr]
                  max-[800px]:gap-y-0
                  max-[800px]:pb-2

                  max-[450px]:grid-cols-1
                "
              >

                {order.products.map((orderProduct) => {
                  return (
                    <Fragment key={orderProduct.product.id}>

                      {/* Product Image */}
                      <div className="text-center max-[450px]:mb-6.25">
                        <img
                          className="
                            mx-auto
                            max-h-27.5
                            max-w-27.5

                            max-[450px]:max-h-37.5
                            max-[450px]:max-w-37.5
                          "
                          src={orderProduct.product.image}
                          alt={orderProduct.product.name}
                        />
                      </div>

                      {/* Product Details */}
                      <div>

                        <div
                          className="
                            mb-1.25
                            font-bold

                            max-[450px]:mb-2.5
                          "
                        >
                          {orderProduct.product.name}
                        </div>

                        <div className="mb-0.75">
                          Arriving on:{' '}
                          {dayjs(
                            orderProduct.estimatedDeliveryTimeMs
                          ).format('MMMM D')}
                        </div>

                        <div
                          className="
                            mb-2
                            max-[450px]:mb-3.75
                          "
                        >
                          Quantity: {orderProduct.quantity}
                        </div>

                        {/* Add to Cart */}
                        <button
                          className="
                            flex
                            h-9
                            w-35
                            items-center
                            justify-center
                            rounded-1.25
                            bg-green-700
                            text-sm
                            text-white
                            hover:bg-green-800

                            max-[800px]:mb-2.5
                            max-[450px]:mb-3.75
                            max-[450px]:w-full
                          "
                        >
                          <img
                            className="mr-2.5 w-5"
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
                          max-[800px]:mb-7.5

                          max-[450px]:col-auto
                          max-[450px]:mb-17.5
                        "
                      >
                        <Link to="/tracking">
                          <button
                            className="
                              w-full
                              rounded-1.25
                              bg-white
                              px-2
                              py-2
                              text-sm
                              text-black
                              shadow-sm
                              ring-1
                              ring-gray-300
                              hover:bg-gray-50

                              max-[800px]:w-35

                              max-[450px]:w-full
                              max-[450px]:py-3
                            "
                          >
                            Track package
                          </button>
                        </Link>
                      </div>

                    </Fragment>
                  );
                })}

              </div>

            </div>
          ))}

        </div>

      </main>
    </>
  );
}

