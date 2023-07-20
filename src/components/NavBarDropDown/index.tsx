'use client'
import React, { useState } from 'react'
import ArrowDown from '../../assets/imgs/caret-down.svg'
import Image from 'next/image'

const NavBarDropdown: React.FC = () => {
  const [dropdownAberto, setDropdownAberto] = useState(false)
  const [dropdownAbertoTwo, setDropdownAbertoTwo] = useState(false)

  const handleMouseEnter = () => {
    setDropdownAberto(true)
  }

  const handleMouseLeave = () => {
    setDropdownAberto(false)
  }
  const handleMouseEnterTwo = () => {
    setDropdownAbertoTwo(true)
  }

  const handleMouseLeaveTwo = () => {
    setDropdownAbertoTwo(false)
  }

  return (
    <div className="flex justify-around space-x-4 max-lg:hidden">
      <div className="flex items-center justify-center ">
        <div className="group relative cursor-pointer ">
          <div className="relative group">
            <div className="flex items-center justify-between rounded">
              <a className="menu-hover pr-1 py-2 text-base font-medium whitespace-nowrap">
                Academia SAP
              </a>
              <Image src={ArrowDown} className="w-3" alt="icon-arrow-right" />

              <span className="content-[''] bg-white h-[1px] w-[0] left-0 bottom-2 absolute transition-width duration-300 group-hover:w-[87%]"></span>
            </div>
          </div>

          <div className="invisible absolute z-50 flex flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible rounded min-w-max">
            <a
              href="https://eyecandy-academy.pt/sap-academy/sap-abap-academy-programacao/"
              className="my-2 block border-b border-gray-100 pl-1 text-sm text-black hover:bg-[#FFF0EA]"
            >
              SAP ABAP Academy - Programação
            </a>

            <a
              href="https://eyecandy-academy.pt/sap-academy/sap-mm-academy-manutencao-de-materiais/"
              className="my-2 block border-b border-gray-100  text-sm text-black hover:bg-[#FFF0EA]"
            >
              SAP MM Academy - Manutenção de Materiais
            </a>
            <a
              href="https://eyecandy-academy.pt/sap-academy/sap-sd-academy-vendas-e-distribuicao/"
              className="my-2 block border-b border-gray-100  text-sm text-black hover:bg-[#FFF0EA]"
            >
              SAP SD Academy - Vendas e Distribuição
            </a>
            <a
              href="https://eyecandy-academy.pt/sap-academy/sap-fi-academy-financeiro/"
              className="my-2 block border-b border-gray-100  text-sm text-black hover:bg-[#FFF0EA]"
            >
              SAP FI ACADEMY - Financeiro
            </a>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="group relative cursor-pointer">
          <div className="relative group">
            <div className="flex items-center">
              <a className="menu-hover text-base font-medium whitespace-nowrap py-2 pr-1">
                Cursos SAP
              </a>
              <Image src={ArrowDown} className="w-3" alt="icon-arrow-right" />
              <span className="content-[''] bg-white h-[1px] w-[0] bottom-2 absolute transition-width duration-300 group-hover:w-[85%]"></span>
            </div>
          </div>

          <div className="invisible absolute z-50 flex flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible rounded min-w-max">
            <a
              href="https://eyecandy-academy.pt/cursos-sap/sap-for-beginners/"
              className="my-2 block border-b border-gray-100  pl-1 text-sm text-black hover:bg-[#FFF0EA]"
            >
              SAP for Beginners
            </a>

            <a
              href="https://eyecandy-academy.pt/cursos-sap/sap-activate/"
              className="my-2 block border-b border-gray-100 text-sm text-black hover:bg-[#FFF0EA]"
            >
              SAP Activate
            </a>
            <a
              href="https://eyecandy-academy.pt/cursos-sap/formacao-executiva-sap-s-4hana/"
              className="my-2 block border-b border-gray-100 text-sm text-black hover:bg-[#FFF0EA]"
            >
              Formação executiva SAP S/4HANA - Finance
            </a>
            <a
              href="https://eyecandy-academy.pt/cursos-sap/formacao-executiva-sap-s-4hana-logistics/"
              className="my-2 block border-b border-gray-100 text-sm text-black hover:bg-[#FFF0EA]"
            >
              Formação executiva SAP S/4HANA - Logistics
            </a>
            <a
              href="https://eyecandy-academy.pt/cursos-sap/sap-extended-warehouse-management/"
              className="my-2 block border-b border-gray-100 text-sm text-black hover:bg-[#FFF0EA]"
            >
              SAP Extended Warehouse Management
            </a>
            <a
              href="https://eyecandy-academy.pt/cursos-sap/curso-sap-hcm-time-evaluation/"
              className="my-2 block border-b border-gray-100 text-sm text-black hover:bg-[#FFF0EA]"
            >
              Curso SAP HCM Time Evaluation
            </a>
            <div>
              <div className="relative">
                <a
                  href="https://eyecandy-academy.pt/cursos-sap/sap-fiori/"
                  className="group my-2 block border-b border-gray-100 text-sm text-black hover:bg-[#FFF0EA]"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  SAP Fiori
                </a>

                {dropdownAberto && (
                  <div
                    className="absolute left-48 -bottom-12 bg-gray-100 w-full py-4 px-5 text-gray-800 shadow-xl"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <a
                      href="https://eyecandy-academy.pt/cursos-sap/sap-fiori/sap-pi/"
                      className="my-2 block border-b border-gray-100 text-sm text-black hover:bg-[#FFF0EA]"
                    >
                      SAP FIORI - Autorização no S/4HANA
                    </a>
                    <a
                      href="https://eyecandy-academy.pt/cursos-sap/sap-fiori/sap-fiori-e-sapui5/"
                      className="my-2 block border-b border-gray-100 text-sm text-black hover:bg-[#FFF0EA]"
                    >
                      SAP FIORI e SAPUI5
                    </a>
                  </div>
                )}
              </div>
            </div>
            <div>
              <div className="relative">
                <a
                  className="group my-2 block border-b border-gray-100 text-sm text-black hover:bg-[#FFF0EA]"
                  onMouseEnter={handleMouseEnterTwo}
                  onMouseLeave={handleMouseLeaveTwo}
                >
                  SAP HANA 2.0
                </a>

                {dropdownAbertoTwo && (
                  <div
                    className="absolute left-48 -bottom-16 bg-gray-100 w-full py-4 px-5 text-gray-800 shadow-xl"
                    onMouseEnter={handleMouseEnterTwo}
                    onMouseLeave={handleMouseLeaveTwo}
                  >
                    <a
                      href="https://eyecandy-academy.pt/cursos-sap/sap-hana-2-0-instalacao/"
                      className="my-2 block border-b border-gray-100 text-sm text-black hover:bg-[#FFF0EA]"
                    >
                      SAP HANA 2.0 Instalação
                    </a>
                    <a
                      href="https://eyecandy-academy.pt/cursos-sap/sap-fiori/sap-hana-2-0-nuvem/"
                      className="my-2 block border-b border-gray-100 text-sm text-black hover:bg-[#FFF0EA]"
                    >
                      SAP HANA 2.0 Nuvem
                    </a>

                    <a
                      href="https://eyecandy-academy.pt/cursos-sap/sap-hana-2-0-monitoramento/"
                      className="my-2 block border-b border-gray-100 text-sm text-black hover:bg-[#FFF0EA]"
                    >
                      SAP HANA 2.0 Monitoramento
                    </a>
                  </div>
                )}
              </div>
            </div>

            <a
              href="https://eyecandy-academy.pt/cursos-sap/sap-solman/"
              className="my-2 block border-b border-gray-100 text-sm text-black hover:bg-[#FFF0EA]"
            >
              SAP SOLMAN
            </a>
            <a
              href="https://eyecandy-academy.pt/cursos-sap/sap-grc-access-control/"
              className="my-2 block border-b border-gray-100 text-sm text-black hover:bg-[#FFF0EA]"
            >
              SAP GRC - Access control
            </a>
            <a
              href="https://eyecandy-academy.pt/cursos-sap/sap-fi-aa/"
              className="my-2 block border-b border-gray-100 text-sm text-black hover:bg-[#FFF0EA]"
            >
              SAP FI - AA
            </a>
            <a
              href="https://eyecandy-academy.pt/cursos-sap/sap-pi/"
              className="my-2 block border-b border-gray-100 text-sm text-black hover:bg-[#FFF0EA]"
            >
              SAP PI
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="group relative cursor-pointer">
          <div className="relative group">
            <div className="flex items-center justify-between space-x-5 rounded">
              <a
                href="https://eyecandy-academy.pt/quem-somos/"
                className="menu-hover py-2 text-base font-medium  whitespace-nowrap"
              >
                Quem Somos
              </a>
              <span className="content-[''] bg-white h-[1px] w-[0] -left-5 bottom-2 absolute transition-width duration-300 group-hover:w-full"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="group relative cursor-pointer">
          <div className="relative group">
            <div className="flex items-center justify-between space-x-5 rounded">
              <a
                href="https://agenda-eye-candy.vercel.app/"
                className="menu-hover py-2 text-base font-medium  whitespace-nowrap"
              >
                Agenda
              </a>
              <span className="content-[''] bg-white h-[1px] w-[0] -left-5 bottom-2 absolute transition-width duration-300 group-hover:w-full"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBarDropdown
