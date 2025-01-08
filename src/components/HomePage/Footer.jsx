import { FaInstagram } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

function Footer() {
  
    return (
      <>
<footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
  <nav className="grid grid-flow-col gap-4">
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <div className="grid grid-flow-col gap-4 text-3xl">
      <button>
      <BsWhatsapp />
      </button>
      <button>
        <FaInstagram />
      </button>
    </div>
  </nav>
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by Genzaire Wardrobe</p>
  </aside>
</footer>
      </>
    )
  }
  
  export default Footer
  