import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useLoadingStore from '../store/LoadingStore';
import Title from '../components/common/Title';
import { motion } from 'framer-motion';
import ProjectsList from '../components/ListProjects.jsx';

const Projects = () => {

  const navigate = useNavigate();
  const { setIsLoading, isLoading, setIsExiting } = useLoadingStore();  

  useEffect(() => {
    if (isLoading) return;
    setIsLoading(prev => !prev);
    setTimeout(() => setIsLoading(false), 1200);
  }, [setIsLoading]);
  
  const handleExitPage = (path) => {
    setIsExiting(true);
    setTimeout(() => {
      setIsExiting(false);
      navigate(path);
    }, 1200);
  }


  return (
    <div className='flex flex-col gap-8 justify-center items-center py-10 mx-10'>
      <motion.div
        initial={{ scale: 0 }} 
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}>
        <Title>⚒️ it's My Projects</Title>
      </motion.div>

      <motion.div >
          <ProjectsList />
      </motion.div>
    </div>
  )
}

export default Projects;
