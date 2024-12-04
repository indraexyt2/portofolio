import React, { useEffect } from 'react';
import useLoadingStore from '../store/LoadingStore';
import Timeline from '../components/Timeline';
import Title from '../components/common/Title';
import { motion } from 'framer-motion';
import CircleButton from '../components/common/CircleButton';
import { SeeIcon, CopyIcon } from '../assets/icons/icons';

const Education = () => {
  const { setIsLoading, isLoading, setIsExiting } = useLoadingStore();  

  useEffect(() => {
    if (isLoading) return;
    setIsLoading(prev => !prev);
    setTimeout(() => setIsLoading(false), 1200);
  }, [setIsLoading]);

  const stackContainerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const Certificates = ({nama, institute, year, sertificate, copy, index }) => {
    return (
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{
          duration: 0.4,
          delay: 0.8 + index * 0.1
        }}
        className='certificates flex flex-col justify-between p-3 w-full md:w-80 h-36 bg-white mx-5 md:mx-0'>
        <div className=''>
          <h2 className='font-bold text-xl'>{nama}</h2>
          <div className="flex justify-between">
            <h3 className="font-semibold text-md">{institute}</h3>
            <p className="text-gray-600">- {year}</p>
          </div>
        </div>
        <div className='flex justify-between items-center'>
          <p className='bg-slate-100 rounded-full px-3 py-1 font-semibold text-sm'>Course</p>
          <div className='flex gap-2'>
            <CircleButton onClick={sertificate} icon={<SeeIcon />} />
            <CircleButton onClick={copy} icon={<CopyIcon />} />
          </div>
        </div>
      </motion.div>
    )
  }

  const listCertificate = [
    {name: 'Belajar Dasar HTML', institute: 'Codepolitan', time: '2024', link: 'https://www.codepolitan.com/c/PVGNQ6J/'},
    {name: 'Belajar Dasar CSS', institute: 'Codepolitan', time: '2024', link: 'https://www.codepolitan.com/c/UQ1GIXV/'},
    {name: 'Belajar JavaScript', institute: 'Codepolitan', time: '2024', link: 'https://www.codepolitan.com/c/6FO47A1/'},
    {name: 'Belajar ReactJs', institute: 'Codepolitan', time: '2024', link: 'https://www.codepolitan.com/c/C7ZPD2U/'},
    {name: 'Belajar Dasar Node.js', institute: 'Codepolitan', time: '2024', link: 'https://www.codepolitan.com/c/YRXSKD9/'},
  ]

  const CopyClipboar = (link) => {
    navigator.clipboard.writeText(link);
  }
  
  return (
    <div className='mx-auto flex flex-col gap-8 py-10'>

      {/* Title */}
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className='flex justify-center md:mx-20'>
        <Title>🎓 it's My Education</Title>
      </motion.div>

      <div className='mx-2 md:mx-14'>
        <Timeline />
      </div>

      {/* Title */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{
          duration: 0.5,
        }} 
        className='flex justify-center md:mx-20'>
        <Title>📜 My Certificates</Title>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} 
        variants={stackContainerVariants}
        className='flex flex-wrap justify-center  md:mx-44 items-center gap-8'>
        {listCertificate.map((certificate, index) => (
          <Certificates 
            index={index}
            key={index}
            nama={certificate.name}
            institute={certificate.institute}
            year={certificate.time}
            sertificate={() => window.open(certificate.link, '_blank')}
            copy={() => CopyClipboar(certificate.link)}
          />
        ))}
      </motion.div>

    </div>
  )
}

export default Education
