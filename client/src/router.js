import {
    createBrowserRouter
} from "react-router-dom";

import IndexPage from "./Pages";
import AdminPage from "./Pages/Admin/index"


export const router = createBrowserRouter([
    {
        path: "/",
        element: <IndexPage />
    },
    {
        path: "/admin",
        element: <AdminPage />
    }
])