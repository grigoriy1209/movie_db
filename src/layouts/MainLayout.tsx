import {Outlet} from "react-router-dom";

import {GenresCss, Header} from "../components";
const MainLayout = () => {
    return (
        <div>
            <Header/>
            <GenresCss/>
           <Outlet/>

        </div>
    );
};
export {MainLayout};