import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0D418C]">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6">
            <a href="https" className="flex items-center">
              <Image
                src="/imgs/logo-ec-academy.png"
                className="ml-3"
                width={258}
                height={51}
                alt="logo-eye-academy"
              />
            </a>
            <div className="p-4 flex mt-8">
              <a href="https">
                <Image
                  src="/imgs/start-up-tech-visa.png"
                  className="ml-3"
                  width={178}
                  height={62.27}
                  alt="start-up-tech-visa"
                />
              </a>

              <div className="max-w-[150px] ml-4">
                <span className="not-italic font-semibold text-xs leading-4 text-white">
                  Eyecandy is part of the Tech Visa program, created to simplify
                  the granting of a work visa or residence permit for non-EU
                  citizens.
                </span>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-1 pr-8">
            <div>
              <h2 className="not-italic font-medium text-3xl leading-9 text-white">
                Ainda tens dúvidas?
              </h2>
              <h2 className="not-italic font-medium text-3xl leading-9 text-white mt-4">
                Basta entrar em contacto connosco!
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="mt-8 flex">
                  <a
                    href="https://api.whatsapp.com/send/?phone=351933181339&text&type=phone_number&app_absent=0"
                    target="blank"
                    className="flex hover:underline bg-[#FF7112] rounded-[200px] p-3 px-5 not-italic font-bold text-base leading-5 text-white"
                  >
                    <Image
                      src="/imgs/icon-whatsapp.png"
                      className="mr-2"
                      width={18.33}
                      height={18.33}
                      alt="icon-whatsapp"
                    />
                    Fale connosco pelo Whatsapp
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="not-italic font-semibold text-sm leading-4 text-white">
            © 2023{" "}
            <a href="https" className="hover:underline">
              Eyecandy Academy
            </a>
            . Todos os direitos reservados.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <ul className="flex text-gray-400 font-medium">
              <li className="ml-4">
                <a
                  href="#www"
                  className="hover:underline not-italic font-semibold text-base leading-4 text-white"
                >
                  SAP Academy
                </a>
              </li>
              <li className="ml-4">
                <a
                  href="#www"
                  className="hover:underline not-italic font-semibold text-base leading-4 text-white"
                >
                  CursosSAP
                </a>
              </li>
              <li className="ml-4">
                <a
                  href="#www"
                  className="hover:underline not-italic font-semibold text-base leading-4 text-white"
                >
                  Quem Somos
                </a>
              </li>
              <li className="ml-4">
                <a
                  href="#www"
                  className="hover:underline not-italic font-semibold text-base leading-4 text-white"
                >
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
