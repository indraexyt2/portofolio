import React from 'react';
import { motion } from 'framer-motion';
import { GitHubIcon } from '../assets/icons/icons.jsx';
import { MovieApp, MernAuth } from '../assets/img/projects/main.jsx';
import CircleButton from './common/CircleButton.jsx';

const ProjectsList = () => {

    const ListMyProject = [
        {
          title: "Movie App",
          description: "A simple movie app built with React.js and Tailwind CSS, using the TMDB API to display a list of movies and search for specific movies.",
          image: MovieApp,
          link: "https://github.com/indraexyt2/react-movie-app"
        },
        {
          title: "MERN Auth",
          description: "MERN Authentication is a full-stack authentication system using the MERN stack and JWT for secure user authentication.",
          image: MernAuth,
          link: "https://github.com/indraexyt2/mern-authentication"
        },
      ]

    return (
        <div className='flex flex-wrap justify-center items-center gap-8'>
            {ListMyProject.map((project, index) => (
                <motion.div 
                    key={index}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={ { duration: 0.4, delay: 0.8 + index * 0.4 } }
                    className='project relative min-w-80 md:w-[400px] overflow-hidden group'>
                    <div className='absolute bg-yellow-300 w-full h-[40px] group-hover:h-[100px] bottom-0 px-4 pt-1 border-t-2 border-slate-900 transition-all duration-500 '>
                        <h2 className='font-bold text-lg mb-1'>{project.title}</h2>
                    <p className='text-xs opacity-0 group-hover:opacity-100'>{project.description}</p>
                    </div>
                    <div className='absolute right-2 -top-10 group-hover:top-2 transition-all duration-500'>
                        <CircleButton onClick={() => window.open(project.link, '_blank')} icon={<GitHubIcon />} />
                    </div>
                    <img 
                        className='w-full h-full object-cover'
                        src={project.image} 
                        alt={project.title} />
                </motion.div>
            ))}
        </div>
    )
}

export default ProjectsList
