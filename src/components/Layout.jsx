
import { Outlet } from "react-router-dom";
import Nav from "./HomePage/Nav";
import Footer from "./HomePage/Footer";

function Layout(){
    return(
        <>
        <Nav></Nav>
        <Outlet></Outlet>
        <Footer></Footer>
        </>
    )
}
export default Layout