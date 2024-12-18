import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";


const MainLayout = () => {
    return (
            <div >
                <div className="bg-[#F2F6FD]"><Navbar></Navbar></div>
                <div className="min-h-[calc(100vh-288px)]">
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
            </div>
    );
};

export default MainLayout;