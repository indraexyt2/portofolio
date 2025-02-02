import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import useLoadingStore from '../store/LoadingStore';
import Title from '../components/common/Title';
import FotoIndra from '../assets/img/IndrawnsyhPng.png';
import { Javascript, ReactJS, Express, Tailwind, Golang, Mysql, Framer, Docker, Gin, Echo, Gorm, Kafka, Postgres, Redis } from '../assets/img/stack/main.jsx';

const About = () => {
  const navigate = useNavigate();
  const { setIsLoading, isLoading, setIsExiting } = useLoadingStore();

  useEffect(() => {
    if (isLoading) return;
    setIsLoading((prev) => !prev);
    setTimeout(() => setIsLoading(false), 1200);
  }, [setIsLoading]);

  const handleExitPage = (path) => {
    setIsExiting(true);
    setTimeout(() => {
      setIsExiting(false);
      navigate(path);
    }, 1200);
  };

  const AboutMe = [
    {
      id: 1,
      p: 'As a Japanese Literature graduate, I have developed a deep interest in technology and software development. Despite my academic background in language and culture, I have cultivated a strong passion for Backend Development. This passion has driven me to explore various programming languages and frameworks, allowing me to transition into the world of software engineering.'
    },
    {
      id: 2,
      p: 'With hands-on experience in JavaScript, Express.js, Golang, Gorm, and Gin, I focus on building dynamic and scalable web applications. My expertise extends to database management using MySQL, PostgreSQL, and Redis, ensuring efficient data handling and optimized performance.'
     },
    {
      id: 3,
      p: 'Beyond backend development, I also have a basic understanding of React, which enables me to contribute to both the backend and frontend aspects of application development. My goal is to be part of innovative projects that prioritize reliability and efficiency, contributing to the development of high-performance server-side systems.'
     },
  ];

  const MyStack = [
    { title: 'GO', icon: Golang },
    { title: 'Gin', icon: Gin },
    { title: 'Echo', icon: Echo },
    { title: 'GORM', icon: Gorm },
    { title: 'Kafka', icon: Kafka },
    { title: 'JavaScript', icon: Javascript },
    { title: 'Express.js', icon: Express },
    { title: 'MySQL', icon: Mysql },
    { title: 'PostgreSQL', icon: Postgres },
    { title: 'Redis', icon: Redis },
    { title: 'Framer', icon: Framer },
    { title: 'Docker', icon: Docker },
    { title: 'React.js', icon: ReactJS },
    { title: 'Tailwind', icon: Tailwind },
  ];

  const stackContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const TechStack = ({ icon, title, index }) => {
    return (
      <motion.div 
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{
          duration: 0.3,
          delay: index * 0.1
        }}
        className="tech-stack flex justify-center items-center w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-md bg-white hover:tech-stack-hover">
        <div className="flex flex-col justify-center items-center mt-5 mb-5">
          <img
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
            src={icon}
            alt={title}
          />
          <h2 className="font-bold text-xs sm:text-md md:text-lg">{title}</h2>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="container mx-auto px-4 pt-5 pb-20 max-w-screen-xl overflow-hidden">
      {/* About Me */}
      <motion.div className="flex flex-col gap-5 mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex justify-center mb-5"
        >
          <Title>😎 About Me</Title>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Bagian Kiri (Gambar) */}
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mx-auto"
          >
            <div className="hero-image flex justify-center bg-yellow-300 rounded-md w-full border-2 border-slate-900 mb-5">
              <img className="w-72 md:max-w-full h-auto" src={FotoIndra} alt="Indra" />
            </div>
          </motion.div>

          {/* Bagian Kanan (Teks) */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="col-span-2 flex flex-col justify-center"
          >
            {AboutMe.map((item) => (
              <p
                key={item.id}
                className="mb-5 text-slate-800 font-semibold text-lg sm:text-lg"
              >
                {item.p}
              </p>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Tech Stack */}
      <div>
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex justify-center my-10">
          <Title>⚙️ Tech Stack</Title>
        </motion.div>

        <motion.div 
          variants={stackContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-wrap justify-center items-center lg:mx-36 relative gap-5 sm:gap-8 md:gap-10">
          {MyStack.map((item, index) => (
            <TechStack key={item.title} icon={item.icon} title={item.title} index={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
