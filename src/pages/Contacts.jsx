import React, { useEffect } from 'react';
import useLoadingStore from '../store/LoadingStore';
import Title from '../components/common/Title';
import ListContacts from '../components/ListContacts';
import { motion } from 'framer-motion';

const Contacts = () => {
  const { setIsLoading, isLoading, setIsExiting } = useLoadingStore();  

  useEffect(() => {
    if (isLoading) return;
    setIsLoading(prev => !prev);
    setTimeout(() => setIsLoading(false), 1200);
  }, [setIsLoading]);

  
  return (
    <div className='flex flex-col justify-center items-center py-10'>
      <div className='mb-8'>
        <Title>📲Find Me On.</Title>
      </div>
      <motion.div>
        <ListContacts />
      </motion.div>
    </div>
  )
}

export default Contacts
