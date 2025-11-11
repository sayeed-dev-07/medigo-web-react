import React, { useContext, useState } from 'react';
import { DataContext } from './Layout';
import Card from './Card';
import { motion } from 'motion/react';

const Doctors = () => {
    const { data } = useContext(DataContext)
    const [arr, setArr] = useState([...data])

    function handleChange(e) {
        e.preventDefault()

        let dataVal = e.target.value;

        let lowerData = dataVal.trim().toLowerCase();
        let filteredArr = data.filter(item => item.name.toLowerCase().includes(lowerData))
        setArr(filteredArr)
    }
    function handleSubmit(e) {
        e.preventDefault()
        let dataVal = e.target.value;
        let lowerData = dataVal.trim().toLowerCase();
        let filteredArr = data.filter(item => item.name.toLowerCase().includes(lowerData))
        setArr(filteredArr)
    }
    
    return (
        <div className='sm:px-[10%] font-fira sm:py-[3%] py-[8%]'>
            <div className='flex flex-col items-center justify-center gap-y-2'>
                <div >
                    <motion.p initial={{y:-30, opacity:0, filter:'blur(20px)'}} whileInView={{y:0, opacity:1, filter:'blur(0px)'}}  transition={{ duration: 0.5,delay:0.3, type: 'spring' }} className='text-4xl '>Search Your Doctor</motion.p>
                </div>
                <form onSubmit={handleSubmit} className='flex items-center justify-center gap-x-3'>
                    <motion.input initial={{x:-100, opacity:0}} whileInView={{x:0, opacity:1}}  transition={{ duration: 0.5,delay:0.3, type: 'spring' }} onChange={handleChange} className='bg-white outline-none py-1.5 px-1 text-black' name='text' type="text" />
                    <motion.button initial={{x:100, opacity:0}} whileInView={{x:0, opacity:1}}  transition={{ duration: 0.5,delay:0.3, type: 'spring' }} type='submit' className='cursor-pointer px-6 py-2 bg-black'>Search</motion.button>
                </form>
            </div>
            <div>
                {arr.length > 0 ?
                    <div className='my-[5%]'>
                        <div>
                            <p className='text-3xl sm:text-5xl font-semibold'>Doctors : </p>
                        </div>
                        <div  className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 items-start gap-6 py-6 '>
                            {arr.map((item) => (
                                    <Card key={item.id} data={item} />
                            ))}
                        </div>
                    </div> : <div className='flex items-center justify-center py-[15%]'>
                        <div className='text-4xl text-white '>No Doctors Found</div>
                    </div>}

            </div>
        </div>
    );
};

export default Doctors;