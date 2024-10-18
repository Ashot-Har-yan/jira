import Header from "../../global/Header";
import { Outlet } from "react-router-dom";

const MainLayout = ()=>{
    return(
        <div className="main_layout_container">
            <Header />
            <main>
                <Outlet />
            </main>

        </div>
    )
};

export default MainLayout;