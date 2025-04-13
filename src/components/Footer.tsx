"use client";
import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { isDesktop } from "react-device-detect";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <h1 className="text-2xl font-semibold font-Ova">Rohit.</h1>
      </div>
      <a
        href={
          isDesktop
            ? `https://mail.google.com/mail/?view=cm&fs=1&to=rohitsharma233294@gmail.com`
            : `mailto:rohitsharma233294@gmail.com`
        }
        target="_blank"
      >
        <div className="w-max flex items-center gap-2 mx-auto mb-2">
          <Image src={assets.mail_icon} alt="" className="w-6" />
          rohitsharma233294@gmail.com
        </div>
      </a>
      <div
        className="text-center sm:flex items-center justify-between border-t border-gray-400
      mx-[10%] mt-12 py-6"
      >
        <p>©{new Date().getFullYear()} Rohit Sharma. All rights reserved.</p>
        <ul className=" flex items-center justify-center gap-10 mt-4 sm:mt-0">
          {/* <li>
            <a target="_blank" href="">
              Github
            </a>
          </li> */}
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/rohit-sharma-941518198?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
