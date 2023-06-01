import React from "react";

// Assets
import LogoEyeAcademy from "../../assets/imgs/logo-ec-academy.png";
import BarraAgenda from "../../assets/imgs/barra-agenda.png";
import IconArrowRight from "../../assets/imgs/icon-arrow-right.png";
import FooterHeader from "../../assets/imgs/footer-header.png";

const Header: React.FC = () => {
  return (
    <div>
      <header>
        <nav className="bg-gradient-to-r from-[#051630] to-[#0D418C] border-gray-200 px-4 lg:px-6 py-8">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="https://" className="flex items-center">
              <img
                src={LogoEyeAcademy}
                className="ml-3 h-6 sm:h-9"
                alt="logo-eye-academy"
              />
            </a>
            <div className="flex items-center lg:order-2">
              <div className="flex items-center lg:order-2">
                <a
                  href="#www."
                  className="flex hidden lg:flex lg:w-auto lg:order-1 items-center bg-[#FF7112] rounded-[2000px] px-4 py-2 mr-2 focus:outline-none not-italic font-bold sm:text-base text-sm leading-5 text-white"
                >
                  <img
                    src={IconArrowRight}
                    className="mr-2"
                    alt="icon-arrow-right"
                  />
                  Contactos
                </a>
              </div>
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
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
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <a
                    href="#www"
                    className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                    aria-current="page"
                  >
                    Academia SAP
                  </a>
                </li>
                <li>
                  <a
                    href="#www"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Cursos SAP
                  </a>
                </li>
                <li>
                  <a
                    href="#www"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    QuemSomos
                  </a>
                </li>
                <li>
                  <a
                    href="#www"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Agenda
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center mx-auto max-w-screen-xl mt-16 mb-12 flex-col">
            <span className="not-italic font-medium text-6xl text-white leading-[78px]">
              Agenda
            </span>
            <img src={BarraAgenda} alt="barra-agenda" />
          </div>
        </nav>
      </header>
      <img src={FooterHeader} className="w-full" alt="footer-header" />
    </div>
  );
};

export default Header;
