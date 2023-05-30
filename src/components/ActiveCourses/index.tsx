import React from "react";
import Banner from "../../assets/imgs/banner.png";

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
            Com este curso grátis de Bartender, o aluno aprenderá: <br />
            Como cuidar e organizar um bar; <br />
            Como preparar e criar bebidas; <br />
            As técnicas de servir profissionalmente,
          </span>
        </div>

        <div className="mt-20 max-w-[630px]">
          <a
            href="/page"
            className="bg-[#FF7112] rounded-[2000px] p-3 not-italic font-bold text-base leading-5 text-white mr-3"
          >
            Comprar 15€
          </a>
          <a
            href="/page"
            className="border-orange-600 border rounded-[2000px] p-3 not-italic font-bold text-base leading-5 text-white"
          >
            Saber mais
          </a>
        </div>
      </div>
    </div>
  );
};

export default ActiveCourses;
