import React from "react";
import LogoEyeAcademy from "../../assets/imgs/logo-ec-academy.png";
import BarraAgenda from "../../assets/imgs/barra-agenda.png";
import IconArrowRight from "../../assets/imgs/icon-arrow-right.png";

const Header: React.FC = () => {
  return (
    <div className="bg-red-500 h-screen">
      <header>
        <nav className="bg-gradient-to-r from-[#051630] via-[#071E40] to-[#0D418C] border-gray-200 px-4 lg:px-6 py-2.5">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="https://" className="flex items-center">
              <img
                src={LogoEyeAcademy}
                className="mr-3 h-6 sm:h-9"
                alt="logo-eye-academy"
              />
            </a>
            <div className="flex items-center lg:order-2">
              <a
                href="#www."
                className="text-white bg-[#FF7112] hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 rounded-[2000px] px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none not-italic font-bold text-base leading-5 text-white"
              >
                <img
                  src={IconArrowRight}
                  className="mr-3"
                  alt="icon-arrow-right"
                />
                Contactos
              </a>
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
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
          </div>
          <div className="flex flex-wrap justify-center items-center mx-auto max-w-screen-xl mt-28 flex-col">
            <span className="not-italic text-6xl text-white">Agenda</span>
            <img src={BarraAgenda} alt="barra-agenda" />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
