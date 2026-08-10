import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex h-[60px] items-center justify-between bg-green-900 px-[15px] text-white">

      {/* Left Section */}
      <div className="w-[208px] max-[800px]:w-auto">
        <Link to="/">
          <img
            className="h-[26px] mt-[1px] max-[675px]:hidden"
            src="images/logo.png"
            alt="Logo"
          />

          <img
            className="hidden h-[26px] mt-[1px] max-[675px]:block"
            src="images/logo-mobile.png"
            alt="Logo"
          />
        </Link>
      </div>

      {/* Middle Section */}
      <div className="mx-[10px] flex max-w-[850px] flex-1">
        <input
          className="h-[38px] w-0 flex-1 rounded-l-[5px] border-none px-[15px] text-[16px] text-black outline-none"
          type="text"
          placeholder="Search"
        />

        <button className="h-[40px] w-[45px] shrink-0 rounded-r-[5px] border-none bg-green-200">
          <img
            className="mx-auto h-[20px] mt-[3px]"
            src="images/icons/search-icon.png"
            alt="Search"
          />
        </button>
      </div>

      {/* Right Section */}
      <div className="flex w-[180px] shrink-0 justify-end">

        {/* Orders */}
        <Link
          className="mx-0 flex items-center rounded-[2px] border border-transparent px-[13px] py-[6px] text-white no-underline hover:border-white"
          to="/orders"
        >
          <span className="text-[15px] font-bold">
            Orders
          </span>
        </Link>

        {/* Cart */}
        <Link
          className="relative flex items-center rounded-[2px] border border-transparent px-[9.5px] py-[6px] text-white no-underline hover:border-white"
          to="/checkout"
        >
          <img
            className="w-[38px]"
            src="images/icons/cart-icon.png"
            alt="Cart"
          />

          <div className="absolute right-[46px] top-[8.5px] w-[26px] text-center text-[14px] font-bold text-green-900">
            3
          </div>

          <div className="ml-[5px] text-[15px] font-bold">
            Cart
          </div>
        </Link>

      </div>
    </header>
  );
}