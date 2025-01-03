import { IoApps } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
function Nav() {


  return (
    <>
  <div className="navbar bg-black">
  <div className="navbar-start">
  <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer" className=" drawer-button text-white text-2xl"><IoApps></IoApps></label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-black min-h-full w-80 p-4 text-white">
      {/* Sidebar content here */}
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
    </div>
  </div>
  <div className="navbar-center">
    <a className="btn btn-ghost text-xl text-white">GW</a>
  </div>
  <div className="navbar-end">
    <button className="btn btn-ghost btn-circle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </button>
    <button className="btn btn-ghost btn-circle">
      <div className="indicator text-xl text-white">
        <CgProfile />
      </div>
    </button>
  </div>
</div>

      
    </>
  )
}

export default Nav;
