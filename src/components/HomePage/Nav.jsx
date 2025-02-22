import { IoApps } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { FaBagShopping } from "react-icons/fa6";

function Nav() {
  return (
    <>
      <div className="navbar bg-black z-50">
        {/* options */}
        <div className="navbar-start">
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer"
                className="drawer-button text-white text-2xl"
              >
                <IoApps />
              </label>
            </div>

            <div className="drawer-side z-50">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu md:bg-transparent bg-black text-base-content min-h-full w-80 p-4"></ul>
              <div className=" flex flex-col">
                <img
                  src="https://wtflex.in/cdn/shop/files/Heavyweight_Tshirt_Category_Icon_2b8cc473-ee67-4046-82c4-bb5ec02b0207.png?v=1698765353"
                  alt="Oversize Tee"
                  className=" w-72 h-72 mt-10"
                />
                <div className="dropdown text-center mt-[-2.5rem]">
                  <div tabIndex={0} role="button" className="btn m-1">
                    Click
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow ml-[3rem]"
                  >
                    <li>
                    <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                    <Link to={"/ProductBasics"}>Basics</Link>
                    </li>
                    <li>
                    <Link to={"/ProductCoustmize"}>Coustmized</Link>
                    </li>
                    <li>
                     <Link to={"/ProductPrinted"}>Printed</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logo */}
        <div className="navbar-center">
          <a className="btn btn-ghost text-3xl text-white font-jersey">GW</a>
        </div>

        {/* icons */}
        <div className="navbar-end">
         <Link to={"/AddedItems"}>
         <button className="btn btn-ghost btn-circle">
          <FaBagShopping  className="text-white text-xl"/>
          </button></Link>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator text-xl text-white">
              <CgProfile />
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

export default Nav;
