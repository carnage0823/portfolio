import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { motion } from "motion/react";

function Header() {
  let yoe = calculateExperience(2022, 8);
  function calculateExperience(startYear: number, startMonth: number) {
    const startDate = new Date(startYear, startMonth - 1); // Month is 0-indexed
    const currentDate = new Date();

    const diffInMonths =
      (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
      (currentDate.getMonth() - startDate.getMonth());

    const experience = Math.floor((diffInMonths / 12) * 10) / 10; // Round down to 1 decimal
    return experience;
  }

  return (
    <div
      className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col
        items-center justify-center gap-4 py-20"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image
          src={assets.profile_img}
          alt="profile"
          className="w-32  rounded-full"
        />
      </motion.div>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ova"
      >
        H! I'm Rohit Sharma{" "}
        <Image src={assets.hand_icon} alt="profile" className="w-6" />
      </motion.h3>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-Ova"
      >
        Full Stack Developer based in Jaipur.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-Ova"
      >
        I am a Full Stack Developer {`(MERN, SQL, React Native)`} from
        Jaipur,Rajasthan with {yoe}+ years of experience.
      </motion.p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="px-10 py-3 border border-white rounded-full bg-black
          text-white flex items-center gap-2 "
          href="#contact"
        >
          Contact Me
          <Image src={assets.right_arrow_white} alt="contact" className="w-4" />
        </motion.a>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="/rohit-Mern-3YOE.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          My Resume
          <Image src={assets.download_icon} alt="download" className="w-4" />
        </motion.a>
      </div>
    </div>
  );
}

export default Header;
