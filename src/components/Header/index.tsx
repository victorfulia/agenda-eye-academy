'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import LogoEyeAcademy from '../../assets/imgs/logo-ec-academy.svg'
import BarraAgenda from '../../assets/imgs/barra-agenda.svg'
import IconArrowRight from '../../assets/imgs/icon-arrow-right.svg'
import FooterHeader from '../../assets/imgs/footer-header.svg'
import List from '../../assets/imgs/list.svg'
import NavBarDropdown from '../NavBarDropDown'
import MenuHamburger from '../MenuHamburger'


const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <header>
        <div className="fixed w-full z-50 top-0 left-0 flex justify-between items-center bg-gradient-to-r from-[#051630] to-[#0D418C] py-8 px-14 max-md:px-4 ">
          <a href="https://eyecandy-academy.pt/" className="items-center">
            <Image src={LogoEyeAcademy} alt="logo-eye-academy" />
          </a>
          <NavBarDropdown />
          <div className="flex items-center lg:order-2">
            <div className="flex items-center lg:order-2">
              <a
                href="https://api.whatsapp.com/send/?phone=351933181339&text&type=phone_number&app_absent=0"
                className="hidden lg:flex lg:w-auto lg:order-1 items-center bg-[#FF7112] rounded-[2000px] px-4 py-2 mr-2 focus:outline-none not-italic font-bold sm:text-base text-sm leading-5 text-white"
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

            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden  w-full "
            >
              <span className="sr-only">Open main menu</span>
              <Image src={List} className="w-7" alt="icon-list" />
            </button>
           
          </div>
        </div>
        <nav
          data-te-navbar-ref
          className="bg-gradient-to-r from-[#051630] to-[#0D418C] border-gray-200 -mb-[6%] px-4 lg:px-6 py-8"
        >
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
      {isOpen && (
              <div className="fixed  h-screen w-[75%] right-0 bottom-0 z-50 flex-grow basis-[100%] items-center lg:mt-0 bg-[#FF7112] lg:basis-auto px-5 py-5 ">
                <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 absolute right-0 top-6"
            >
              <Image src={List} className="w-7" alt="icon-list" />
            </button>
                <ul
                  className=" list-style-none flex flex-col pl-0 lg:flex-row pt-16"
                  data-te-navbar-nav-ref
                >
                  <li className=" lg:my-0 lg:pr-2" data-te-nav-item-ref>
                    <MenuHamburger/>
                   
                  </li>
                </ul>
              </div>
            )}
    </div>
  )
}

export default Header
