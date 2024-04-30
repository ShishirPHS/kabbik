import Navbar from "./assets/components/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <Navbar></Navbar>
          {/* Page content here */}
          Content
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 sideNav">
            {/* Sidebar content here */}
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
              <button>Login</button>
            </li>
            <li>
              <a>Services</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
