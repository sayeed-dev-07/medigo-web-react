import { ArrowLeft } from 'lucide-react';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import toast, { Toaster } from 'react-hot-toast';
import { DataContext } from './Layout';


const DoctorInfo = () => {
    

    const { hired, setHired } = useContext(DataContext)
    console.log(hired, setHired);
    const location = useLocation();
    const { data } = location.state;

    function handlehire(){
        let dataFound = hired.find(item => item.id == data.id)
        if (!dataFound) {
            setHired([...hired, data])
            toast.success(`Successfully hired ${data.name} ✅, Check Appointed tab to see appointed doctors`)
        }else{
            toast.error(`${data.name} is Already Appointed`)
        }
    }
    return (
        <div className='flex min-h-screen font-fira  relative py-[5%] justify-center  items-center '>
            <Toaster position="top-right" reverseOrder={false} />
            <div className='flex items-center lg:max-h-[60vh] lg:flex-row flex-col gap-y-9 justify-center gap-x-12'>
                <div className=' lg:w-[40%] xl:w-[30%] w-full sm:w-[60%] lg:h-auto'>
                    <img className='h-full w-full object-cover' src={data.image} alt="" />
                </div>
                <div className='flex-1 flex items-start flex-col gap-y-3 sm:text-2xl text-xl'>
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
                        <button 
                            onClick={()=>handlehire()}
                            className="px-5 py-2 bg-black hover:bg-white hover:text-black duration-200 transition-all border cursor-pointer text-xl inline-block text-center"
                        >
                            Hire
                        </button>

                    </div>

                </div>
            </div>
            <Link to='/doctors' className='p-3 absolute rounded-4xl right-[5%] bottom-[10%] bg-black cursor-pointer'>
                <ArrowLeft />
            </Link>
        </div>
    );
};

export default DoctorInfo;