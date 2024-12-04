import React, { useState, useEffect} from 'react';
import { useNavigate, NavLink, useLocation, Link } from 'react-router-dom';
import useLoadingStore from '../store/LoadingStore';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowIcon } from '../assets/icons/icons';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { GitHubIcon, WhatsAppIcon, LinkedInIcon, InstagramIcon } from '../assets/icons/icons';

const Navbar = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { setIsExiting } = useLoadingStore();
    const [isFloatMenuOpen, setIsFloatMenuOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: '🛖 Home', href: '/' },
        { name: '😎 About', href: '/about' },
        { name: '🎓 Education', href: '/education' },
        { name: '⚒️ Project', href: '/projects' },
        { name: '📑 Resume', href: '/resume' },
        { name: '📲 Contacts', href: '/contacts' },
    ]

    const handleExitPage = (path) => {
        if (location.pathname === path) return;
        setIsExiting(true);
        setTimeout(() => {
          setIsExiting(false);
          navigate(path);
        }, 2000);
      }

    const FloatingMenu = () => {
        return (
            <motion.div 
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='menu bg-white border-slate-700 border-2 h-12 rounded-md hidden md:flex justify-center items-center px-5'>
                <ul 
                    className='flex items-center gap-3 font-semibold text-xl text-slate-700'>
                    {navLinks.map((link, index) => (
                        <NavLink 
                            key={index}
                            onClick={() => handleExitPage(link.href)}
                            className={`${location.pathname === link.href ? 'active-link' : 'nav-link'}`}>
                                {link.name}
                        </NavLink>
                     ))}
                </ul>
            </motion.div>
        )
    }

    useEffect(() => {
        const windowScroll = () => {
            if (window.scrollY > 0) {
                setIsFloatMenuOpen(true);
            } else {
                setIsFloatMenuOpen(false);
            }

        }
        window.addEventListener("scroll", windowScroll);
        return () => window.removeEventListener("scroll", windowScroll);
    }, [])

    useEffect(() => {
        if (isMobileMenuOpen) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "";
        }
        return () => {
          document.body.style.overflow = "";
        };
      }, [isMobileMenuOpen]);
    

    const handleNextPage = () => {
        if (location.pathname === "/") {
            navigate("/about");
        } else if (location.pathname === "/about") {
            navigate("/education");        
        } else if (location.pathname === "/education") {
            navigate("/projects");
        } else if (location.pathname === "/projects") {
            navigate("/resume");
        } else if (location.pathname === "/resume") {
            navigate("/contacts");
        }
    }

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };
      
    const handleExitMobileMenu = (path) => {
        setIsMobileMenuOpen(prev => !prev);
        if (location.pathname === path) return;
        setIsExiting(true);
        setTimeout(() => {
          setIsExiting(false);
          navigate(path);
        }, 2000);
    }

    const MyContact = [
        {
          title: "LinkedIn", 
          icon: <LinkedInIcon fontSize='large' className='text-blue-700' />,
          link: "https://www.linkedin.com/in/indrawnsyh/" 
        },
        {
          title: "GitHub", 
          icon: <GitHubIcon fontSize='large' className='text-black' / >,
          link: "https://github.com/indraexyt2"
        },
        { 
          title: "Instagram", 
          icon: <InstagramIcon fontSize='large' className='text-pink-600' />,
          link: "https://www.instagram.com/indra.wnsyh/"
        }
      ]
    
    return (
        <header className={"pb-20"}>
            {/* Menu Desktop */}
            <nav className='fixed top-0 left-0 right-0 z-20 flex justify-between items-center px-10 py-5'>
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className='logo bg-white border-slate-700 border-2 w-24 h-12 rounded-md flex justify-center items-center px-20'>
                    <Link to="/" className='text-xl font-bold'>Indrawnsyh</Link>
                </motion.div>

                <AnimatePresence>
                    {!isFloatMenuOpen ? (
                        <motion.ul 
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className='hidden lg:flex items-center gap-6 font-semibold text-xl text-slate-700'>
                            {navLinks.map((link, index) => (
                                <NavLink 
                                    key={index}
                                    onClick={() => handleExitPage(link.href)}
                                    className={`${location.pathname === link.href ? 'active-link' : 'nav-link'}`}>
                                    {link.name}
                                </NavLink>
                            ))}
                        </motion.ul>
                    ) : (
                        <FloatingMenu />
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {isFloatMenuOpen &&
                        <motion.div
                            data-tooltip-id="next-page" 
                            onClick={() => handleNextPage()}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className='hidden group md:flex next-button border-2 border-slate-900 bg-yellow-300 hover:bg-yellow-400 rounded-full p-3 group cursor-pointer'>
                            <motion.div 
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}>
                                <div className='-rotate-45 origin-center group-hover:rotate-0 transition-all duration-300'>
                                    <motion.div
                                    animate={{
                                        scale: [1, 1.3, 1],
                                        rotate: [5, 10, 3],
                                        y: [0, -5, 0], 
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        repeatType: "loop",
                                        ease: "easeInOut",
                                    }}
                                    >
                                        <ArrowIcon />
                                    </motion.div>
                                </div>
                            </motion.div>
                        </motion.div> 
                    }
                </AnimatePresence>

                <AnimatePresence>
                    <div  
                        onClick={() => handleMobileMenuToggle()}
                        className='w-10 h-10 group cursor-pointer flex justify-center items-center lg:hidden'>
                        <div className='relative flex flex-col items-center'>
                            <div className={`absolute transition-all duration-300 w-10 h-2.5 rounded-full bg-yellow-300 group-hover:bg-yellow-400 border-2 border-slate-900 ${isMobileMenuOpen ? 'rotate-45 origin-top-left -top-5' : '-top-3'}`}></div>
                            <div className={`absolute transition-all duration-300 w-10 h-2.5 rounded-full bg-yellow-300 group-hover:bg-yellow-400 border-2 border-slate-900 ${isMobileMenuOpen ? '-rotate-45 origin-bottom-left top-1' : 'top-1'}`}></div>
                        </div>
                    </div>
                </AnimatePresence>

                <ReactTooltip id="next-page" type="dark" effect="float"  content='Next Page' />
            </nav>
            
            {/* Menu Mobile */}
            <nav>
                <AnimatePresence mode='wait'>
                    {isMobileMenuOpen && (
                        <motion.div 
                            initial={{  y: "-100%" }}
                            animate={{ y: "0%" }}
                            exit={{ y: "-100%" }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
                        className='absolute bg-white inset-0 h-screen z-10 pt-24'>
                            <ul className='mx-8 space-y-4 flex flex-col'>
                                <AnimatePresence mode='wait'>
                                    {navLinks.map((link, index) => (
                                        <motion.NavLink 
                                            initial={{  x: -180 }}
                                            animate={{ x: 0 }}
                                            exit={{ x: -180 }}
                                            transition={{ duration: 0.2, delay: 0.5 + index * 0.1 }}
                                            key={index}
                                            onClick={() => handleExitMobileMenu(link.href)}
                                            className={`transition-all duration-300 font-bold text-xl cursor-pointer hover:text-yellow-400 ${location.pathname === link.href ? 'text-yellow-400' : ''}`}>
                                            {link.name}
                                        </motion.NavLink>
                                    ))}
                                </AnimatePresence>
                            </ul>
                            <div className='mx-8 space-y-4 flex flex-col pt-10'>
                                <motion.h2 
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.3, delay: 1.5 }}
                                    className='title w-max font-semibold text-xl'> ☎️ Get In Touch</motion.h2>
                                <div className='space-y-2 '>
                                    <motion.h3 
                                         initial={{ scale: 0 }}
                                         animate={{ scale: 1 }}
                                         transition={{ duration: 0.3, delay: 1.6 }}
                                        onClick={() => window.open("mailto:indrawnsyh0@gmail.com", "_blank")}
                                        className='font-semibold transition-all duration-300 hover:text-yellow-400 cursor-pointer'>
                                        indrawnsyh0@gmail.com
                                    </motion.h3>
                                    <motion.h3 
                                         initial={{ scale: 0 }}
                                         animate={{ scale: 1 }}
                                         transition={{ duration: 0.3, delay: 1.7 }}
                                        onClick={() => window.open("https://wa.me/6282298005546", "_blank")}
                                        className='font-semibold transition-all duration-300 hover:text-yellow-400 cursor-pointer'>
                                        +62 822 9800 5546
                                    </motion.h3>
                                    <motion.h3
                                         initial={{ scale: 0 }}
                                         animate={{ scale: 1 }}
                                         transition={{ duration: 0.3, delay: 1.8 }}
                                         className='font-semibold '>Karawang, Indonesia</motion.h3>
                                    <div className='flex gap-3 pt-5'>
                                        {MyContact.map((contact, index) => (
                                            <motion.div 
                                                initial={{ y: 50, scale: 0 }}
                                                animate={{ y: 0, scale: 1 }}
                                                transition={{ duration: 0.3, delay: 1.9 + index * 0.1 }}
                                                className='transition-all duration-300 hover:scale-110 cursor-pointer'
                                                onClick={() => window.open(contact.link, "_blank")}>
                                                {contact.icon}
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>  
                    )}
                </AnimatePresence>
            </nav>
        </header>
    )
}

export default Navbar
