import {
    createBrowserRouter
} from "react-router-dom";

import IndexPage from "./Pages";
import AboutPage from "./Pages/about"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <IndexPage />
    },
    {
        path: "/about",
        element: <AboutPage />
    }
])