import React, { useState } from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='px-[10%] py-6 text-2xl font-fira flex items-center justify-between w-full bg-[#171616ce]'>
            <div>
                <NavLink to='/' className='hidden sm:block font-semibold text-4xl'>MEDIGO</NavLink>
            </div>
            <div className='flex items-center justify-center gap-x-6'>
                <NavLink to='/' className={({ isActive }) =>
                    isActive ? 'border-b-2 border-white' : 'border-b-2 border-transparent'
                }
                >Home</NavLink>
                <NavLink className={({ isActive }) =>
                    isActive ? 'border-b-2 border-white' : 'border-b-2 border-transparent'
                }
                    to='/doctors'>Doctors</NavLink>
            </div>
        </div>
    );
};

export default Navbar;