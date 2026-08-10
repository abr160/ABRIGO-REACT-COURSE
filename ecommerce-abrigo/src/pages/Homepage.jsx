import { Header } from '../components/Header';

export function HomePage() {
  return (
    <>
      <Header />

      <main className="mt-[60px]">
        <div
          className="
            grid
            grid-cols-1

            min-[451px]:grid-cols-2
            min-[576px]:grid-cols-3
            min-[801px]:grid-cols-4
            min-[1001px]:grid-cols-5
            min-[1301px]:grid-cols-6
            min-[1601px]:grid-cols-7
            min-[2001px]:grid-cols-8
          "
        >

          {/* Product 1 */}
          <div className="flex flex-col border-r border-b border-[#f0f0f0] px-[25px] pt-[40px] pb-[25px]">

            <div className="mb-[20px] flex h-[180px] items-center justify-center">
              <img
                className="max-h-full max-w-full rounded-[5px]"
                src="images/products/athletic-cotton-socks-6-pairs.jpg"
                alt="Black and Gray Athletic Cotton Socks"
              />
            </div>

            <div className="mb-[5px] h-[40px] overflow-hidden">
              Black and Gray Athletic Cotton Socks - 6 Pairs
            </div>

            <div className="mb-[10px] flex items-center">

              <img
                className="mr-[6px] w-[100px]"
                src="images/ratings/rating-45.png"
                alt="4.5 star rating"
              />

              <div className="mt-[3px] cursor-auto text-green-700">
                87
              </div>

            </div>

            <div className="mb-[10px] font-bold">
              $10.90
            </div>

            <div className="mb-[17px]">
              <select className="rounded border border-gray-300 px-2 py-1">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>

            <div className="flex-1"></div>

            <div className="mb-[8px] flex items-center text-[16px] text-green-700 opacity-0">
              <img
                className="mr-[6px] h-[19px]"
                src="images/icons/checkmark.png"
                alt="Added"
              />
              Added
            </div>

            <button className="mt-[1px] h-[34px] w-full rounded-[5px] bg-green-700 px-[8px] text-white hover:bg-green-800">
              Add to Cart
            </button>

          </div>


          {/* Product 2 */}
          <div className="flex flex-col border-r border-b border-[#f0f0f0] px-[25px] pt-[40px] pb-[25px]">

            <div className="mb-[20px] flex h-[180px] items-center justify-center">
              <img
                className="max-h-full max-w-full rounded-[5px]"
                src="images/products/intermediate-composite-basketball.jpg"
                alt="Intermediate Size Basketball"
              />
            </div>

            <div className="mb-[5px] h-[40px] overflow-hidden">
              Intermediate Size Basketball
            </div>

            <div className="mb-[10px] flex items-center">

              <img
                className="mr-[6px] w-[100px]"
                src="images/ratings/rating-40.png"
                alt="4 star rating"
              />

              <div className="mt-[3px] cursor-auto text-green-700">
                127
              </div>

            </div>

            <div className="mb-[10px] font-bold">
              $20.95
            </div>

            <div className="mb-[17px]">
              <select className="rounded border border-gray-300 px-2 py-1">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>

            <div className="flex-1"></div>

            <div className="mb-[8px] flex items-center text-[16px] text-green-700 opacity-0">
              <img
                className="mr-[6px] h-[19px]"
                src="images/icons/checkmark.png"
                alt="Added"
              />
              Added
            </div>

            <button className="mt-[1px] h-[34px] w-full rounded-[5px] bg-green-700 px-[8px] text-white hover:bg-green-800">
              Add to Cart
            </button>

          </div>


          {/* Product 3 */}
          <div className="flex flex-col border-r border-b border-[#f0f0f0] px-[25px] pt-[40px] pb-[25px]">

            <div className="mb-[20px] flex h-[180px] items-center justify-center">
              <img
                className="max-h-full max-w-full rounded-[5px]"
                src="images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg"
                alt="Adults Plain Cotton T-Shirt"
              />
            </div>

            <div className="mb-[5px] h-[40px] overflow-hidden">
              Adults Plain Cotton T-Shirt - 2 Pack
            </div>

            <div className="mb-[10px] flex items-center">

              <img
                className="mr-[6px] w-[100px]"
                src="images/ratings/rating-45.png"
                alt="4.5 star rating"
              />

              <div className="mt-[3px] cursor-auto text-green-700">
                56
              </div>

            </div>

            <div className="mb-[10px] font-bold">
              $7.99
            </div>

            <div className="mb-[17px]">
              <select className="rounded border border-gray-300 px-2 py-1">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>

            <div className="flex-1"></div>

            <div className="mb-[8px] flex items-center text-[16px] text-green-700 opacity-0">
              <img
                className="mr-[6px] h-[19px]"
                src="images/icons/checkmark.png"
                alt="Added"
              />
              Added
            </div>

            <button className="mt-[1px] h-[34px] w-full rounded-[5px] bg-green-700 px-[8px] text-white hover:bg-green-800">
              Add to Cart
            </button>

          </div>

        </div>
      </main>
    </>
  );
}