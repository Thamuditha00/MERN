import {
    createBrowserRouter
} from "react-router-dom";

import IndexPage from "./Pages";
import AdminPage from "./Pages/Admin/index"
import DoctorPage from "./Pages/Doctor/index"
import ManagerPage from "./Pages/Manager/index"
import LabPage from "./Pages/Lab/index"
import NursePage from "./Pages/Nurse/index"
import PharmacyPage from "./Pages/Pharmacy/index"


export const router = createBrowserRouter([
    {
        path: "/",
        element: <IndexPage />
    },
    {
        path: "/admin",
        element: <AdminPage />
    },
    {
        path: "/doctor",
        element: <DoctorPage />
    },
    {
        path: "/manager",
        element: <ManagerPage />
    },
    {
        path: "/lab",
        element: <LabPage />
    },
    {
        path: "/nurse",
        element: <NursePage />
    },
    {
        path: "/pharmacy",
        element: <PharmacyPage />
    }
])