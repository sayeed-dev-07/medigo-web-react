import React, { createContext, useState } from 'react';
import Loader from './Loader';
import { Outlet, useLoaderData } from 'react-router';
import { Home } from 'lucide-react';
import Navbar from './Navbar';
import { Toaster } from 'react-hot-toast';


export const DataContext = createContext(null);

const Layout = () => {
    const [hired, setHired] = useState([])
    const data = useLoaderData()
    return (
        <div className='min-h-screen   text-[#F8F4E3] bg-[#353535]'>
            <Toaster position="top-right" reverseOrder={false} />
            <Navbar />
            <div className='px-4'>
                <DataContext value={{ data , hired, setHired}}>
                    <Outlet />
                </DataContext>
            </div>
        </div>
    );
};

export default Layout;
