import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="container mx-auto navbar flex justify-between">
        <div className="flex flex-row-reverse justify-between w-full">
          {/* sidebar opening button */}
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1">
            <img src="../src/assets/navLogo.png" alt="Website Logo" />
          </div>
        </div>
        {/* navbar for large devices */}
        <div className="flex-none hidden lg:block largeNav">
          <ul className="menu menu-horizontal pr-0 items-center">
            {/* Navbar menu content here */}
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Services</a>
            </li>
            <li>
              <button className="px-[26px] py-[6px] bg-[#2F6F59] hover:bg-[#2F6F59] hover:text-white rounded-[20px] text-white mr-[40px] navLogInBtn">
                Login
              </button>
            </li>
            <li>
              <button className="p-0 hover:bg-transparent navCartBtn">
                <img src="../src/assets/cartIcon.png" alt="icon of cart" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
