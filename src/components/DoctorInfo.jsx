import { ArrowLeft } from 'lucide-react';
import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router';
import toast, { Toaster } from 'react-hot-toast';
import { DataContext } from './Layout';
import Button from './Button';
import { motion } from 'motion/react';

const DoctorInfo = () => {


    const { hired, setHired } = useContext(DataContext)
    const location = useLocation();
    const { data } = location.state;

    function handlehire() {
        let dataFound = hired.find(item => item.id == data.id)
        if (!dataFound) {
            setHired([...hired, data])
            toast.success(`Successfully hired ${data.name} ✅, Check Appointed tab to see appointed doctors`)
        } else {
            toast.error(`${data.name} is Already Appointed`)
        }
    }
    return (
        <div className='flex min-h-[90vh] font-fira  relative py-[5%] justify-center  items-center overflow-hidden'>

            <div className='flex items-center lg:max-h-[60vh] lg:flex-row flex-col gap-y-9 justify-center gap-x-12'>
                <motion.div initial={{ x: -200, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.3, type: 'spring' }} className=' lg:w-[40%] xl:w-[30%] w-full sm:w-[60%] lg:h-auto'>
                    <img className='h-full w-full object-cover' src={data.image} alt="" />
                </motion.div>
                <motion.div initial={{ x: 200, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.6, type: 'spring' }} className='flex-1 flex items-start flex-col gap-y-3 sm:text-2xl text-xl'>
                    <div>
                        <span className='font-semibold'>👨‍⚕️ Name : </span>{data.name}
                    </div>

                    <div>
                        <span className='font-semibold'>🎓 Education : </span>{data.education}
                    </div>

                    <div>
                        <span className='font-semibold'>🩺 Speciality : </span>{data.speciality}
                    </div>

                    <div>
                        <span className='font-semibold'>⌛ Experience : </span>{data.experience}
                    </div>

                    <div>
                        <span className='font-semibold'>🆔 Registration No : </span>{data.registrationNumber}
                    </div>

                    <div>
                        <span className='font-semibold'>🏥 Working At : </span>{data.workingAt}
                    </div>

                    <div>
                        <span className='font-semibold'>💰 Fees : </span> $ {data.fees}
                    </div>

                    <div>
                        <span className='font-semibold'>📅 Available : </span>{data.available.join(', ')}
                    </div>

                    <div>
                        <span className='font-semibold'>🎖️ Designation : </span>{data.designation}
                    </div>
                    <div>

                        <Button func={handlehire} text={'Hire'} />
                    </div>

                </motion.div>
            </div>
            <Link to="/doctors">
                <motion.div initial={{ right: 0, bottom:'10%', opacity: 0 }}
                    whileInView={{ right: '10%', opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2, type: 'spring' }}
                    className="p-3 absolute  bg-black text-white rounded-full cursor-pointer shadow-lg hover:scale-110 transition-transform"
                >
                    <ArrowLeft/>
                </motion.div>
            </Link>

        </div>
    );
};

export default DoctorInfo;