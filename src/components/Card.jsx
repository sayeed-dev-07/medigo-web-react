import React, { useContext } from 'react';
import { Link } from 'react-router';
import { DataContext } from './Layout';
import { AnimatePresence, motion } from 'motion/react';
const Card = ({ data, btn = false }) => {
    const { setHired, hired } = useContext(DataContext);
    function handleDelete() {
        const newData = hired.filter(item => item.id !== data.id)
        setHired(newData)
    }
    return (

            <motion.div initial={{y:-20, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.5, type:'spring'}} className='text-[#F8F4E3] p-6 border rounded-lg font-fira'>
                <div className='h-[400px]'>
                    <img className='w-full h-full object-cover' src={data.image} alt={data.name} />
                </div>

                <div className='flex flex-col gap-y-3'>
                    <div className='py-3'>
                        <p className='text-2xl sm:text-3xl font-semibold'>{data.name}</p>

                    </div>
                    <div className='flex items-start justify-between flex-col text-xl  gap-y-2'>
                        <p><span className='font-semibold'>Speciality : </span> {`${data.speciality}`}</p>
                        <p><span className='font-semibold'>Designation : </span>{data.designation}</p>
                    </div>
                </div>
                <div className='flex group items-center gap-3 flex-wrap justify-center mt-3'>
                    <Link to={`/doctors/${data.id}`} state={{ data }} className='border px-5 py-2 hover:bg-black text-white transition-all duration-300 rounded-md text-lg cursor-pointer'>Info</Link>
                    {
                        btn && <button onClick={handleDelete} className='border px-5 py-2 hover:bg-black text-white transition-all duration-300 rounded-md text-lg cursor-pointer'>
                            Delete
                        </button>
                    }
                </div>

            </motion.div>
    );
};

export default Card;