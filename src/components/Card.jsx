import React from 'react';
import { Link } from 'react-router';

const Card = ({data}) => {
    return (
        <div className='text-[#F8F4E3] p-6 border rounded-lg font-fira'>
            <div className='h-[400px]'>
                <img className='w-full h-full object-contain' src={data.image} alt={data.name} />
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
           <div className='flex group items-center flex-col justify-center my-6'>
            <Link to={`/doctors/${data.id}`} state={{data}} className='border px-5 py-2 hover:bg-black text-white transition-all duration-300 rounded-md text-lg cursor-pointer'>Info</Link>
           </div>

        </div>
    );
};

export default Card;