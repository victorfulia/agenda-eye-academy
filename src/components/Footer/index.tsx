import React from "react";

// Assets
import LogoEyeAcademy from "../../assets/imgs/logo-ec-academy.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0D418C]">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https" className="flex items-center">
              <img
                src={LogoEyeAcademy}
                className="ml-3 h-6 sm:h-9"
                alt="logo-eye-academy"
              />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-1 pr-8">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white">
                Ainda tens dúvidas?
              </h2>
              <h2 className="mb-6 text-sm font-semibold text-white">
                Basta entrar em contacto connosco!
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https:" className="hover:underline">
                    Fale connosco pelo Whatsapp
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm sm:text-center text-gray-400">
            © 2023{" "}
            <a href="https" className="hover:underline">
              Eyecandy Academy
            </a>
            . Todos os direitos reservados.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <ul className="flex text-gray-400 font-medium">
              <li className="ml-4">
                <a href="#www" className="hover:underline">
                  SAP Academy
                </a>
              </li>
              <li className="ml-4">
                <a href="#www" className="hover:underline">
                  CursosSAP
                </a>
              </li>
              <li className="ml-4">
                <a href="#www" className="hover:underline">
                  Quem Somos
                </a>
              </li>
              <li className="ml-4">
                <a href="#www" className="hover:underline">
                  Política de privacidade
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
