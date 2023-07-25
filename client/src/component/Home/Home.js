import React from "react";
import { motion } from "framer-motion";
import { Hospitals } from "../hospitals/hospitals";

export const Home = () => {
  return (
  <>
    <div className="relative w-full  h-[83vh] sm:h-[95vh]">
      <div className="relative w-full h-full">
        <video
          className="w-full h-full object-cover"
          src="https://v4.cdnpk.net/videvo_files/video/free/video0484/large_watermarked/_import_60e9313090cf28.81013704_FPpreview.mp4"
          autoPlay
          loop
          muted
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-400">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center items-center align-middle h-full"
          >
            <div>
              <h1 className="text-white text-xl font-bold">
                Welcome to My React Tailwind Template..📸
              </h1>
              <span className=""></span>
            </div>
            <div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
<Hospitals/>
    </>
  );
};
