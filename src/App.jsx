import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Populwe from "./components/Populwe/Populwe";

function App() {
  return (
    <>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <Navbar></Navbar>
          {/* Page content here */}
          <Banner></Banner>
          <Populwe></Populwe>
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
