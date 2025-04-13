import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

function NavBar() {
  const [isScroll, setIsScroll] = React.useState<boolean>(false);
  const sideMenuRef = useRef<HTMLUListElement>(null);
  const OpenMenu = () => {
    if (sideMenuRef.current !== null) {
      sideMenuRef.current.style.transform = "translate(-16rem";
    }
  };

  const closeMenu = () => {
    if (sideMenuRef.current !== null) {
      sideMenuRef.current.style.transform = "translate(16rem";
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);
  return (
    <div>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt="blur" className="w-full " />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 
        ${isScroll && "shadow-sm backdrop-blur-lg"}`}
        style={{
          backgroundColor: isScroll ? "rgb(255,255,255,0.5)" : undefined,
        }}
      >
        <a href="#top">
          {/* <Image
            src={assets.logo}
            className="w-28 cursor-pointer mr-14"
            alt="logo"
          /> */}
          <h1 className="text-6xl font-semibold font-Ova">Rohit.</h1>
        </a>
        <ul
          className={`hidden md:flex items-center gap-6 lag:gap-8 rounded-full px-12 py-3
           ${isScroll ? "" : "shadow-sm"}`}
          style={{
            backgroundColor: isScroll ? undefined : "rgb(255,255,255,0.5)",
          }}
        >
          <li>
            <a className="font-Ova" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ova" href="#about">
              About me
            </a>
          </li>
          <li>
            <a className="font-Ova" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-Ova" href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-Ova" href="#contact">
              Contact Me
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          {/* <button>
            <Image src={assets.moon_icon} alt="moon" className="w-6" />
          </button> */}
          <a
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ova"
            href="#contact"
          >
            Contact
            <Image src={assets.arrow_icon} className="w-3" alt="arrow" />
          </a>

          <button onClick={OpenMenu} className="block md:hidden ml-3">
            <Image
              src={assets.menu_black}
              alt="menu"
              className="w-6 cursor-pointer"
            />
          </button>
        </div>

        {/* {----Mobile Menu---} */}

        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4
         py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500"
        >
          <div className="absolute right-6 top-6">
            <Image
              src={assets.close_black}
              onClick={closeMenu}
              alt="cross"
              className="w-5 cursor-pointer"
            />
          </div>
          <li>
            <a className="font-Ova" href="#top" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a className="font-Ova" href="#about" onClick={closeMenu}>
              About me
            </a>
          </li>
          <li>
            <a className="font-Ova" href="#services" onClick={closeMenu}>
              Services
            </a>
          </li>
          <li>
            <a className="font-Ova" href="#work" onClick={closeMenu}>
              My Work
            </a>
          </li>
          <li>
            <a className="font-Ova" href="#contact" onClick={closeMenu}>
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
