import React, { useContext } from 'react';
import { Link } from 'react-router';
import { DataContext } from './Layout';
import { AnimatePresence, motion } from 'motion/react';
import toast from 'react-hot-toast';
import Button from './Button';
const Card = ({ data, btn = false }) => {
    const { setHired, hired } = useContext(DataContext);
    function handleDelete() {
        const newData = hired.filter(item => item.id !== data.id)
        setHired(newData)
    }
    function handlehire() {
        let dataFound = hired.find(item => item.id == data.id)
        if (!dataFound) {
            setHired([...hired, data])
            toast(`Successfully hired ${data.name} ✅, Check Appointed tab to see appointed doctors`)
        } else {
            toast.error(`${data.name} is Already Appointed`)
        }
    }
    return (

        <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, type: 'spring' }} whileHover={{scale:1.03}} className='text-[#F8F4E3] p-6 border rounded-lg font-fira'>
            <div className='h-[300px]'>
                <motion.img layoutId={`${data.id}-name`} className='w-full h-full object-cover' src={data.image} alt={data.name} />
            </div>

            <div className='flex flex-col gap-y-3'>
                <div className='py-3'>
                    <p className='text-xl sm:text-2xl font-semibold'>{data.name}</p>

                </div>
                <div className='flex items-start justify-between flex-col text-base sm:text-xl  gap-y-2'>
                    <p><span className='font-semibold'>Speciality : </span> {`${data.speciality}`}</p>
                    <p><span className='font-semibold'>Designation : </span>{data.designation}</p>
                </div>
            </div>
            <div className='flex group items-center gap-3 flex-wrap justify-center mt-3'>
                <Link to={`/doctors/${data.id}`} state={{ data }} className=''>
                    <Button text={'Info'} />
                </Link>
                {
                    btn ? <Button func={handleDelete} text={'Delete'} /> :
                        <Button func={handlehire} text={'Hire'} />

                }
            </div>

        </motion.div>
    );
};

export default Card;