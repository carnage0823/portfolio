import { assets, workData } from "@/assets/assets";
import { motion } from "motion/react";
import Image from "next/image";
import React from "react";

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[12%] py-20 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ova"
      >
        My Portfolio
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ova"
      >
        My Latest Work
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ova"
      >
        Welcome to my development portfolio! Explore a collection of projects
        showcasing my expertise in full-stack development
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10 gap-5"
      >
        {workData.map(({ bgImage, description, title, link }, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg
          relative cursor-pointer group"
            style={{ backgroundImage: `url(${bgImage})` }}
            key={index}
          >
            <div
              className="bg-white w-10/12 rounded-md absolute
             left-1/2 bottom-5 -translate-x-1/2 py-3 px-5 flex items-center justify-center duration-500 group-hover:bottom-7"
            >
              <div>
                <h2 className="font-semibold">{title}</h2>
                <p className="text-sm text-gray-700">{description}</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <a href={link} target="_blank">
                  <Image
                    src={assets.send_icon}
                    alt="send_icon"
                    className="w-5"
                  />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        href=""
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px]
         border-gray-700 rounded-full py-3 px-10 mx-auto my-20
         hover:bg-lightHover duration-500
         "
      >
        Show more
        <Image
          src={assets.right_arrow_bold}
          alt="right arrow bold"
          className="w-4"
        />
      </motion.a>
    </motion.div>
  );
};

export default Work;
