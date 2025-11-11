import React, { useContext } from 'react';
import { DataContext } from './Layout';
import { data } from 'react-router';
import Card from './Card';
import { AnimatePresence, motion } from 'motion/react';

const Appointments = () => {
    const { hired } = useContext(DataContext)
    return (
        <div className='sm:px-[10%] font-fira sm:py-[3%] py-[8%]'>
            {hired.length > 0 ?
                <div className=''>
                    <div>
                        <p className='text-3xl sm:text-5xl font-semibold'>Appointed Doctors : </p>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 items-start gap-6 py-6 '>
                        <AnimatePresence>
                            {hired.map((item) => (
                                <motion.div
                                    initial={{ y: -20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -10, x: -10, opacity: 0 }}
                                    transition={{ duration: 0.5, type: 'spring' }}
                                    
                                >
                                    <Card key={item.id} data={item} btn='true' />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div> : <div className='flex items-center justify-center py-[15%]'>
                    <div className='text-4xl text-white '>No Doctors is Appointed</div>
                </div>}
        </div>
    );
};

export default Appointments;