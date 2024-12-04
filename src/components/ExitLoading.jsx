import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import useLoadingStore from "../store/LoadingStore";
import { HelloIcon, WorldIcon } from "../assets/icons/icons";

const ExitLoading = () => {
  const { isExiting } = useLoadingStore();

  const containerVariants = {
    initial: { opacity: 1 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
    exit: { opacity: 1, transition: { duration: 0.3 } }, 
  };

  const columnVariants = {
    initial: { y: "-100%", opacity: 1 },
    animate: { y: "0%", opacity: 1, transition: { duration: 0.3, ease: "easeIn" } },
  };

  const data = [
    {title: "Hello", subtitle: "indrawnsyh"},
    {icon : HelloIcon},
    {title: "World", subtitle: "indrawnsyh"},
    {icon : WorldIcon}
  ]

  return (
    <AnimatePresence mode="wait" >
      {isExiting && (
        <motion.div
          className="inset-0 z-50 fixed grid grid-cols-4 overflow-hidden"
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {data.map((item, index) => (
            <motion.div
              key={index}
              className="bg-yellow-300 flex items-center justify-center"
              variants={columnVariants}
            >
            {item.title && item.subtitle 
              ? (
                <div className="flex flex-col items-center">
                   <h2 className="text-lg sm:text-3xl md:text-4xl font-bold text-slate-700">{item.title}</h2>
                   <h2 className="text-md sm:text-lg md:text-xl text-slate-700">{item.subtitle}</h2>
                </div>
              ) : item.icon
              ? (
                <div className="w-16 h-16 sm:h-28 sm:w-28 md:w-32 md:h-32 bg-white rounded-md border-4 border-b-8 border-slate-800 flex items-center justify-center ">
                  <item.icon style={{ fontSize: '5vw', color: '#1E293B' }} />
                </div>
              ) : null
            }
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExitLoading;
