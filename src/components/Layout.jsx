import React, { createContext, useContext } from 'react';
import Loader from './Loader';
import { Outlet, useLoaderData } from 'react-router';
import { Home } from 'lucide-react';
import Navbar from './Navbar';


export const DataContext = createContext(null);

const Layout = () => {
    const data = useLoaderData()
    return (
        <div className='min-h-screen   text-[#F8F4E3] bg-[#353535]'>
            <Navbar />
            <div className='px-4'>
                <DataContext value={{ data }}>
                    <Outlet />
                </DataContext>
            </div>
        </div>
    );
};

export default Layout;
