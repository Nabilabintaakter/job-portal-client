import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";


const MainLayout = () => {
    return (
        <div className="bg-[#F2F6FD]">
            <div className="max-w-7xl mx-auto">
                <Navbar></Navbar>
                <div className="min-h-[calc(100vh-288px)]">
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;