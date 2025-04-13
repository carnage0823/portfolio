import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { assets, serviceData } from "@/assets/assets";

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-[12%] py-20 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ova"
      >
        What I offer
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ova"
      >
        My Services
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ova"
      >
        I specialize in creating responsive and engaging user interfaces using
        React and React Native, ensuring seamless user experiences across both
        web and mobile platforms. On the back-end, I have a solid understanding
        of Express.js to build RESTfull APIs, manage databases, and integrate
        third-party services.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10 "
      >
        {serviceData.map(({ description, title, icon, link }, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black 
            cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500"
            key={index}
          >
            <Image src={icon} alt="skill" />
            <h3 className="text-lg my-4 text-gray-700">{title}</h3>
            <p className="text-sm text-gray-600 leading-5">{description}</p>
            <a className="flex items-center gap-2 text-sm mt-5" href={link}>
              Read more
              <Image src={assets.right_arrow} alt="" className="w-4 " />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
