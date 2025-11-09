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
    const parentVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };
    const childVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };
    return (
        <div className='sm:px-[10%] font-fira sm:py-[3%] py-[8%]'>
            <div className='flex flex-col items-center justify-center gap-y-2'>
                <div >
                    <p className='text-4xl '>Search Your Doctor</p>
                </div>
                <form onSubmit={handleSubmit} className='flex items-center justify-center gap-x-3'>
                    <input onChange={handleChange} className='bg-white outline-none py-1.5 px-1 text-black' name='text' type="text" />
                    <button type='submit' className='cursor-pointer px-6 py-2 bg-black'>Search</button>
                </form>
            </div>
            <div>
                {arr.length > 0 ?
                    <div className='my-[5%]'>
                        <div>
                            <p className='text-3xl sm:text-5xl font-semibold'>Doctors : </p>
                        </div>
                        <div  className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-6 py-6 '>
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