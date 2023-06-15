"use client";
import React, { useState } from "react";
import Image from "next/image";

// Assets
import LogoEyeAcademy from "../../assets/imgs/logo-ec-academy.png";
import BarraAgenda from "../../assets/imgs/barra-agenda.png";
import IconArrowRight from "../../assets/imgs/icon-arrow-right.png";
import FooterHeader from "../../assets/imgs/footer-header.png";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <header>
        <nav
          data-te-navbar-ref
          className="bg-gradient-to-r from-[#051630] to-[#0D418C] border-gray-200 -mb-[6%] px-4 lg:px-6 py-8"
        >
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="https://eyecandy-academy.pt/" className="items-center">
              <Image src={LogoEyeAcademy} alt="logo-eye-academy" />
            </a>
            <div className="flex items-center lg:order-2">
              <div className="flex items-center lg:order-2">
                <a
                  href="https://api.whatsapp.com/send/?phone=351933181339&text&type=phone_number&app_absent=0"
                  className="flex hidden lg:flex lg:w-auto lg:order-1 items-center bg-[#FF7112] rounded-[2000px] px-4 py-2 mr-2 focus:outline-none not-italic font-bold sm:text-base text-sm leading-5 text-white"
                  target="blank"
                >
                  <Image
                    src={IconArrowRight}
                    className="mr-2"
                    alt="icon-arrow-right"
                  />
                  Contactos
                </a>
              </div>

              {isOpen && (
                <div className="flex-grow basis-[100%] items-center lg:mt-0  lg:basis-auto">
                  <ul
                    className="list-style-none flex flex-col pl-0 lg:flex-row"
                    data-te-navbar-nav-ref
                  >
                    <li className=" lg:my-0 lg:pr-2" data-te-nav-item-ref>
                      <a
                        className="active disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                        aria-current="page"
                        href="https://api.whatsapp.com/send/?phone=351933181339&text&type=phone_number&app_absent=0"
                        target="blank"
                        data-te-nav-link-ref
                      >
                        Contato
                      </a>
                    </li>
                  </ul>
                </div>
              )}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center mx-auto max-w-screen-xl mt-16 mb-12 flex-col">
            <span className="not-italic font-medium text-6xl text-white leading-[78px]">
              Agenda
            </span>
            <Image src={BarraAgenda} alt="barra-agenda" className="mb-12" />
          </div>
        </nav>
        <Image
          src={FooterHeader}
          className="w-full -mb-4"
          alt="footer-header"
        />
      </header>
    </div>
  );
};

export default Header;
