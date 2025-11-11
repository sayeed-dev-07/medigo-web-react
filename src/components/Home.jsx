import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from './Layout';
import Card from './Card';
import { Toaster } from 'react-hot-toast';
import { motion } from 'motion/react';


const Home = () => {
    const { data } = useContext(DataContext)
    const [dataArr, setDataArr] = useState([])
    
   useEffect(()=>{
        function randomArr(){
    let numArr = []
    while(numArr.length < 6){
        let index = Math.floor(Math.random() * data.length)
        if (!numArr.includes(index)) {
            numArr.push(index)
        }
    }
    let arr = getArray(numArr)
    return arr;
   }
   function getArray(arr){
    let newArr = []
    arr.forEach(item=> newArr.push(data[item]))
    return newArr;
   }
   const dataArr2 = randomArr()
   setDataArr(dataArr2)
   },[data])
   
    return (
        <div className='sm:px-[10%] font-fira sm:py-[3%] py-0'>
            <div className='flex items-center justify-center min-h-screen md:min-h-auto py-0 sm:py-[20%]'>
                <motion.p initial={{ y: 100, opacity: 0, filter:'blur(20px)' }}
                    animate={{ y: 0, opacity: 1 , filter:'blur(0px)'}}
                    transition={{ duration: 0.5, delay: 0.2, type: 'spring' }} className=' text-3xl md:text-5xl text-center'>
                    <span className='italic font-semibold text-[#da2c38]'>MediGo</span> is a smart doctor-finding platform that helps users book trusted healthcare professionals easily and quickly.
                </motion.p>
            </div>
            <div>
                <p className='text-3xl sm:text-5xl font-semibold'>Our Popular Doctors : </p>
            </div>
            <div className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] items-start gap-6 py-6 justify-center'>
            {
                dataArr.map( item => <Card key={item.id} data={item}/>)
            }
        </div>
        </div>
    );
};

export default Home;