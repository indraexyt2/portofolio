import React, { useEffect, useState } from "react";
import { Document, Page } from "react-pdf";
import useLoadingStore from "../store/LoadingStore";
import Title from "../components/common/Title";
import Button from "../components/common/Button";
import { DownloadIcon, LinkIcon, PrevIcon, NextIcon } from "../assets/icons/icons";
import { motion } from "framer-motion";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

const Resume = () => {
  const { setIsLoading, isLoading } = useLoadingStore();
  const pdfUrl = "/CV-Indrawansyah.pdf";
  const [scale, setScale] = useState(1.3); 
  const [page, setPage] = useState(1);

  const updateScale = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 640) {
      setScale(0.5); 
    } else if (screenWidth < 1024) {
      setScale(0.8); 
    } else {
      setScale(1.3); 
    }
  };

  useEffect(() => {
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  useEffect(() => {
    if (isLoading) return;
    setIsLoading((prev) => !prev);
    setTimeout(() => setIsLoading(false), 1200);
  }, [setIsLoading]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "CV-Indrawansyah.pdf";
    link.click();
  };

  const NextPage = (e) => {
    e.preventDefault();
    if (page === 2) {
      return setPage(1);
    }

    setPage(page + 1)
  }

  const PrevPage = (e) => {
    e.preventDefault();
    if (page === 1) {
      return setPage(2);
    }

    setPage(page - 1)
  }

  return (
    <div className="flex flex-col gap-8 py-10 justify-center items-center">
      {/* Title */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Title>📑 it's My Resume</Title>
      </motion.div>

      {/* Button */}
      <div className="flex flex-col justify-center gap-8">
        <div className="flex justify-end gap-5">
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}>
              <Button
                color={'bg-yellow-300 hover:bg-yellow-400'}
                icon={<DownloadIcon />}
                onClick={() => handleDownload()}
              >
                Download
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}>
              <Button
                color={'bg-white hover:bg-slate-100'}
                icon={<LinkIcon />}
                onClick={() => {
                  window.open(pdfUrl, "_blank");
                }}
              >
                Open
              </Button>
            </motion.div>
        </div>
        
        {/* CV */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1.3 }} 
          className="cv rounded-md w-full max-w-4xl border-4 border-slate-900  relative">
          <Document file={pdfUrl}>
            <Page pageNumber={page} scale={scale} />
          </Document>
          <motion.div 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="next-page absolute top-1/2 -left-5 sm:-left-7 z-10 bg-yellow-300 hover:bg-yellow-400 p-1 sm:p-2 md:p-3 rounded-md border-2 border-slate-900">
              <button type="button" onClick={(e) => PrevPage(e)}>
                <PrevIcon />
              </button>
          </motion.div>
          <motion.div 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="next-page absolute top-1/2 -right-5 sm:-right-7 z-10 bg-yellow-300 hover:bg-yellow-400 p-1 sm:p-2 md:p-3 rounded-md border-2 border-slate-900">
              <button type="button" onClick={(e) => NextPage(e)}>
                <NextIcon />
              </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
