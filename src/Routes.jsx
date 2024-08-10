import { createHashRouter, redirect, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import About from "./pages/About/About";
import Articles from "./pages/Articles/Articles";
import Contact from "./pages/Contact/Contact";
import Doctors from "./pages/Doctors/Doctors";
import Games from "./pages/Games/Games";
import Home from "./pages/Home/Home";

const Routes = () => {


    const routers = createHashRouter([
        {

            path: "", element: <Layout />,
            children: [
                { index: true, loader: () => redirect("home") },
                { path: "home", element: <Home /> },
                { path: "about", element: <About /> },
                { path: "doctors", element: <Doctors /> },
                { path: "articles", element: <Articles /> },
                { path: "games", element: <Games /> },
                { path: "contact", element: <Contact /> },


            ]
        },

    ]);



    return <>
        <RouterProvider router={routers} />

    </>
}

export default Routes