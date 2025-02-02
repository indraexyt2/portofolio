import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useLoadingStore from '../store/LoadingStore';
import { useScramble } from 'use-scramble';
import { TypeAnimation } from 'react-type-animation';
import Button from '../components/common/Button';
import { ResumeIcon, RocketIcon, RocketIcon2 } from '../assets/icons/icons';
import { motion } from 'framer-motion';
import FotoIndra from '../assets/img/Indrawnsyh.png';

const Home = () => {
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
  };

  const { ref, replay } = useScramble({
    text: "Indrawansyah",
    range: [65, 125],
    speed: 0.14,
    tick: 5,
    step: 10,
    scramble: 10,
    seed: 1,
    chance: 0.78,
    overdrive: true,
    overflow: true,
  });


  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 place-items-center mx-10 md:mx-52 lg:ms-60 mt-20 md:mt-28">
      
      {/* left section */}
      <motion.section className="flex flex-col gap-7"
        initial={{ opacity: 0, scale: 0}}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <div className="relative">
          <h2
            className="hidden sm:flex overflow-hidden h-[50px] sm:h-[60px] md:h-[80px] md:w-[520px] text-5xl sm:text-6xl md:text-7xl font-bold cursor-pointer text-slate-700 transition-all duration-300 hover:scale-105"
            style={{
              whiteSpace: "nowrap", 
            }}
            ref={ref}
            onMouseOver={replay}
            onFocus={replay}
          />
          <h2 className='flex sm:hidden text-5xl sm:text-6xl md:text-7xl font-bold cursor-pointer text-slate-700 transition-all duration-300 hover:scale-105'>
            Indrawansyah
          </h2>
        </div>
        <div className="flex flex-col gap-3">
          <span className="relative text-3xl sm:text-3xl md:text-4xl font-bold text-gray-600">
            <p className='inline-block'>Hi, Folks</p> 
            <img className='w-[40px] md:w-[55px] inline-block ms-2 absolute -top-3 md:-top-4' src="/wave.gif" alt="" />
          </span>
          <span className="flex gap-2 text-2xl sm:text-2xl md:text-3xl font-bold ">
            <p className='text-gray-600'>I'm</p>
            <p className='text-yellow-500'>
            <TypeAnimation
              sequence={[
                'Fullstack Developer',
                1000,
                'Frontend Developer',
                1000,
                'Backend Developer',
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: 'inherit', display: 'inline-block' }}
              repeat={Infinity}
            />
            </p>
          </span>
          <p className='text-gray-600 font-semibold'>
            I'm a <b>Backend Developer</b> skilled in building scalable web applications using Golang, Gin, and Fiber. Proficient in PostgreSQL, MySQL, Gorm, Kafka, Redis, and Docker for efficient backend systems.
          </p>
          <div className='flex flex-col sm:flex-row gap-5'>
            <Button
              onClick={() => handleExitPage('/resume')}
              icon={<ResumeIcon />}
              custom={"hover:bg-slate-100 h-14"}
              color={'bg-white'}>
              My Resume
            </Button>
            <Button
              onClick={() => handleExitPage('/about')}
              icon={<RocketIcon />}
              custom={"hover:bg-yellow-500 h-14"}
              color={'bg-yellow-300'}>
              More About Me
            </Button>
          </div>
        </div>
      </motion.section>
      
      {/* right section */}
      <motion.section 
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="hidden xl:flex">
        <div className='hero-image bg-slate-900 rounded-md border-2 border-slate-900'>
          <img 
            className='h-96 rounded-md'
            src={FotoIndra} 
            alt="" />

          <div className='absolute z-10 w-20 h-20 bg-slate-900 rounded-md top-12 -right-8 border-2 border-slate-900 '>

          </div>
          <div className='absolute z-20 w-20 h-20 bg-yellow-300 rounded-md top-10 -right-10 border-2 border-slate-900 flex justify-center items-center'>
              <RocketIcon2 style={{ fontSize: '45px'}} />
          </div>
        </div>
      </motion.section>

    </div>
  );
};

export default Home;
