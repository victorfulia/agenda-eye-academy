import React from 'react'
import Image from 'next/image'

// Assets
import WomanSkill from '../../assets/imgs/woman-skill.png'

const Skills: React.FC = () => {
  return (
    <div className="bg-[url('/imgs/bg-skills.png')] w-full">
      <div className="flex w-full justify-between pt-8 px-8 mx-auto max-w-screen-xl items-center">
        <div className="flex-col max-w-[589px] mb-12 md:mb-2">
          <div>
            <span className="not-italic font-medium text-5xl text-black leading-9">
              Adquire novas skills tecnológicas
            </span>
          </div>
          <div className="mt-12">
            <span className="not-italic font-normal text-base text-black leading-6 opacity-60">
              Comece agora uma carreira nova e mude seu futuro para sempre.
              Trabalhe com o sistema por onde passa 80% do PIB mundial, onde 99
              das 100 maiores empresas do mundo tem, tais como: Google, Porche,
              IBM, Coca-Cola, Roche, Dell, Nestlé, Siemens, Procter & Gamble,
              Amazon etc. Até a Microsoft tem SAP para gerenciar processos
              internos, incluindo finanças, recursos humanos e cadeia de
              suprimentos.
            </span>
          </div>
          
        </div>
        <div className="w-full flex justify-end">
          <Image
            src={WomanSkill}
            className="w-[0px] md:w-[290px] h-auto"
            alt="woman-skill"
          />
        </div>
      </div>
    </div>
  )
}

export default Skills
