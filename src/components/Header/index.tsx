import React from "react";
import LogoEyeAcademy from "../../assets/imgs/logo-ec-academy.png";
import BarraAgenda from "../../assets/imgs/barra-agenda.png";
import IconArrowRight from "../../assets/imgs/icon-arrow-right.png";
import FooterHeader from "../../assets/imgs/footer-header.png";

const Header: React.FC = () => {
  return (
    <div className="h-screen">
      <header>
        <nav className="bg-gradient-to-r from-[#051630] to-[#0D418C] border-gray-200 px-4 lg:px-6 py-2.5">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="https://" className="flex items-center">
              <img
                src={LogoEyeAcademy}
                className="ml-3 h-6 sm:h-9"
                alt="logo-eye-academy"
              />
            </a>
            <div className="flex items-center lg:order-2">
              <a
                href="#www."
                className="flex items-center bg-[#FF7112] rounded-[2000px] px-4 py-1 mr-2 focus:outline-none not-italic font-bold sm:text-base text-sm leading-5 text-white"
              >
                <img
                  src={IconArrowRight}
                  className="mr-2 h-2"
                  alt="icon-arrow-right"
                />
                Contactos
              </a>
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
