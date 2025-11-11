
import Home from "./Home";
import Layout from "./Layout";
import Doctors from "./Doctors";
import Error from "./Error";
import { createBrowserRouter } from "react-router";
import Loader from "./Loader";
import DoctorInfo from "./DoctorInfo";
import Appointments from "./Appointments";


const route = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <Error />,
        loader: () => fetch('/doctor.json'),
        hydrateFallbackElement: <Loader />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'doctors',
                element: <Doctors />,
            },{
                path:'doctors/:doctorName',
                element: <DoctorInfo/>
            },{
                path:'appointments',
                element:<Appointments/>
            }

        ]
    },
    {

    }
])

export default route;