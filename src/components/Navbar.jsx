import React, { useState } from 'react';
import { NavLink } from 'react-router';
import { motion } from 'motion/react';
const Navbar = () => {
    return (
        <div className=' px-1 md:px-[10%] py-6 text-xl sm:text-2xl font-fira flex items-center justify-center sm:justify-between w-full h-[10vh] bg-[#171616ce]'>
            <motion.div initial={{x:-100, opacity:0}} animate={{x:0, opacity:1}}  transition={{ duration: 0.5,delay:0.3, type: 'spring' }} className='hidden sm:block'>
                <NavLink  to='/' className=' font-semibold text-4xl'>MEDIGO</NavLink>
            </motion.div>
            <motion.div initial={{x:100, opacity:0}} animate={{x:0, opacity:1}}  transition={{ duration: 0.5,delay:0.6, type: 'spring' }} className='flex items-center justify-center gap-x-6'>
                <NavLink to='/' className={({ isActive }) =>
                    isActive ? 'border-b-2 border-white' : 'border-b-2 border-transparent'
                }
                >Home</NavLink>
                <NavLink className={({ isActive }) =>
                    isActive ? 'border-b-2 border-white' : 'border-b-2 border-transparent'
                }
                    to='/doctors'>Doctors</NavLink>
                <NavLink className={({ isActive }) =>
                    isActive ? 'border-b-2 border-white' : 'border-b-2 border-transparent'
                }
                    to='/appointments'>Appointments</NavLink>
            </motion.div>
        </div>
    );
};

export default Navbar;