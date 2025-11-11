import React, { useContext } from 'react';
import { DataContext } from './Layout';
import Card from './Card';
import { AnimatePresence, motion } from 'motion/react'; 

const Appointments = () => {
  const { hired } = useContext(DataContext);

  return (
    <div className="sm:px-[10%] font-fira sm:py-[3%] py-[8%]">
      <AnimatePresence mode="popLayout"> 
        {hired.length > 0 ? (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <div>
              <p className="text-3xl sm:text-5xl font-semibold">
                Appointed Doctors :
              </p>
            </div>

            <motion.div
              layout 
              className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 items-start gap-6 py-6"
            >
              <AnimatePresence>
                {hired.map((item, index) => (
                  <motion.div
                    key={item.id || `no-id-${index}`}
                    layout 
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, x: -10, opacity: 0 }}
                    transition={{ duration: 0.4, type: 'spring' }}
                  >
                    <Card data={item} btn={true} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        ) : (
          <div className="flex items-center justify-center py-[15%]">
            <motion.div initial={{y:30, opacity:0, filter:'blur(10px)'}} animate={{y:0, opacity:1, filter:'blur(0px)'}} transition={{duration:0.5}} className="text-4xl text-white">
              No Doctors are Appointed
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Appointments;
