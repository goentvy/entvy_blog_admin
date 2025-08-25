import { Outlet } from "react-router";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";


function RootLayout() {
    return (
        <div>
            <Sidebar />
            <div className="ml-64">
                <Header />
                <Outlet />
            </div>
        </div>
    );
}

export default RootLayout;