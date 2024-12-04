import React from "react";
import { motion } from "framer-motion";
import { EducationIcon } from "../assets/icons/icons";

const Timeline = () => {
  const timelineData = [
    {
      id: 1,
      title: "Golang Development",
      institute: "Dibimbing.id",
      time: "2024 - Now",
      description:
        "Learning advanced back-end development concepts, focusing on building robust and scalable applications using Golang.",
    },
    {
      id: 2,
      title: "Full Stack Developer",
      institute: "Kelasfullstack.id",
      time: "2024",
      description:
        "Focused on React, Node.js, Express, Tailwind CSS, and MongoDB to build full-stack web applications.",
    },
    {
      id: 3,
      title: "S1 - Japanese Literature",
      institute: "Universitas Jenderal Soedirman",
      time: "2020 - 2024",
      description:
        "Studied Japanese language and culture while participating in academic and extracurricular activities.",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.8,
        staggerChildren: 0.8,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
        opacity: 1, 
        y: 0 ,
        transition: {
            duration: 0.8,
        }
    },
  };

  return (
    <div className="container mx-auto px-4 py-5">
      <motion.div
        className="relative flex flex-col items-center"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        {/* Vertical Line */}
        <div className="absolute w-1 bg-slate-900 h-full left-3 sm:-left-6 lg:left-1/2 transform md:-translate-x-1/2"></div>

        {timelineData.map((itemData, index) => (
          <motion.div
            key={itemData.id}
            className={`flex items-center ps-16 md:ps-5 lg:ps-0 w-full mb-10 lg:mb-0 ${
              index % 2 === 0 ? "justify-start" : "justify-start lg:justify-end"
            }`}
            variants={item}
          >
            {/* Content */}
            <div
              className={`education-timeline w-full lg:w-5/12 bg-white p-4 rounded-lg border-2 border-slate-900`}
            >
              <h3 className="font-bold text-xl">{itemData.title}</h3>
              <div className="flex justify-between">
                <h3 className="font-bold text-md">{itemData.institute}</h3>
                <p className="text-gray-600">{itemData.time}</p>
              </div>
              <p className="mt-2 text-gray-700">{itemData.description}</p>
            </div>

            {/* Circle */}
            <div className="absolute w-12 h-12 bg-yellow-400 text-white flex items-center justify-center rounded-full transform -translate-x-[5px] sm:-translate-x-2 lg:-translate-x-1/2 -left-1 sm:-left-10 lg:left-1/2 border-4 border-slate-900">
              <EducationIcon className="text-black" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Timeline;
