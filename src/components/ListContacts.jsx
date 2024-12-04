import React from 'react';
import { GitHubIcon, WhatsAppIcon, EmailIcon, LinkedInIcon, InstagramIcon } from '../assets/icons/icons';
import Button from './common/Button';
import { motion } from 'framer-motion';

const ListContacts = () => {

    const MyContact = [
        {
          title: "LinkedIn", 
          icon: <LinkedInIcon className='text-blue-700' />,
          link: "https://www.linkedin.com/in/indrawnsyh/" 
        },
        {
          title: "GitHub", 
          icon: <GitHubIcon className='text-black' / >,
          link: "https://github.com/indraexyt2"
        },
        {
          title: "WhatsApp", 
          icon: <WhatsAppIcon className='text-green-600' />,
          link: "https://wa.me/6282298005546"
        },
        {
          title: "Email", 
          icon: <EmailIcon className='text-red-600' />,
          link: "mailto:indrawnsyh0@gmail.com"
        },
        { 
          title: "Instagram", 
          icon: <InstagramIcon className='text-pink-600' />,
          link: "https://www.instagram.com/indra.wnsyh/"
        }
      ]

    return (
        <div className='flex flex-wrap justify-center items-center gap-5 mx-5  lg:mx-72'>
            {MyContact.map((contact, index) => (
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={ { duration: 0.4, delay: 0.8 + index * 0.4 } }
                className='w-full md:w-52'>
                <Button
                  key={index}
                  onClick={() => window.open(contact.link, "_blank")}
                  custom={"hover:bg-yellow-500 h-14"}
                  width={"w-full"}
                  color={"bg-yellow-300"}
                  icon={contact.icon}>
                  {contact.title}
                </Button>
              </motion.div>
            ))}
        </div>
    )
}

export default ListContacts
