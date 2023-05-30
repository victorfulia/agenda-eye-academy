import React from "react";

// Assets
import Banner from "../../assets/imgs/banner.png";
import IconCalendar from "../../assets/imgs/icon-calendar.png";
import IconClock from "../../assets/imgs/icon-clock.png";

// Components
import Counter from "../Counter";


const ActiveCourses: React.FC = () => {
  return (
    <div>
      <img src={Banner} className="w-full mt-2 absolute" alt="banner" />
      <div className="w-full pt-8 absolute flex-col px-8">
        <div className="mt-20 max-w-[630px]">
          <span className="not-italic font-bold text-5xl text-white leading-6">
            Barman: Como preparar e criar bebidas
          </span>
        </div>

        <div className="mt-6 max-w-[630px]">
          <span className="not-italic font-medium text-base leading-6 text-white text-opacity-80">
            O bartender, além de ser responsável pelo bar, precisa ter
            conhecimento de bebidas, produtos, equipamentos e utensílios
            necessários para o seu trabalho.
          </span>
        </div>

        <div className="mt-6 max-w-[630px]">
          <span className="not-italic font-medium text-base leading-6 text-white text-opacity-80">
            Com este curso grátis de Bartender, o aluno aprenderá:
          </span>
          <ul className="list-disc not-italic font-medium text-base leading-6 text-white text-opacity-80 pl-4">
            <li>Como cuidar e organizar um bar;</li>
            <li>Como preparar e criar bebidas;</li>
            <li>As técnicas de servir profissionalmente,</li>
          </ul>
        </div>

        <div className="mt-20 max-w-[630px]">
          <a
            href="/page"
            className="bg-[#FF7112] rounded-[2000px] p-3 not-italic font-bold text-base leading-5 text-white mr-3 font-sans"
          >
            Comprar 15€
          </a>
          <a
            href="/page"
            className="border-orange-600 border rounded-[2000px] p-3 not-italic font-bold text-base leading-5 text-white font-sans"
          >
            Saber mais
          </a>
        </div>

        <div className="absolute right-0 -mt-32">
          <div className="flex">
            <div className="backdrop-blur-md backdrop-opacity-6 rounded-[2000px]">
              <span className="flex p-3 not-italic font-normal text-sm leading-4 text-white">
                <img src={IconCalendar} className="mr-2" alt="icon-calendar" />
                De 26 a 28 de Maio
              </span>
            </div>
            <div className="backdrop-blur-md backdrop-opacity-6 rounded-[2000px]">
              <span className="flex p-3 not-italic font-normal text-sm leading-4 text-white">
                <img src={IconClock} className="mr-2" alt="icon-clock" />
                08 Horas
              </span>
            </div>
          </div>

          <div className="flex">
            <Counter title="Dias" value="0" />
            <Counter title="Horas" value="0" />
            <Counter title="Minutos" value="0" />
            <Counter title="Segundos" value="0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveCourses;
