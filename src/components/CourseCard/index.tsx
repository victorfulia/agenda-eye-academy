import React from "react";

// Assets
import Card from "../../assets/imgs/card.png";
import IconDarkCalendar from "../../assets/imgs/icon-dark-calendar.png";
import IconDarkClock from "../../assets/imgs/icon-dark-clock.png";
import IconArrowRight from "../../assets/imgs/icon-arrow-right-opacity.png";

const CourseCard: React.FC = () => {
  return (
    <div className="flex items-center justify-center mb-32">
      <img src={Card} className="m-2" alt="card" />

      <div className="bg-[#FFCE59] rounded-t-[20px] p-4 py-6 w-[108px] absolute mt-[195px] mr-[177px]">
        <span className="flex not-italic font-normal text-sm leading-4 text-black -mt-4">
          Academia
        </span>
      </div>
      <div className="w-[285px] h-48 flex-col bg-white rounded-[20px] shadow-xl p-4 absolute mt-[400px]">
        <div className="flex items-center">
          <span className="not-italic font-semibold text-base leading-5 text-black">
            Treino de Bíceps e Tríceps
          </span>
        </div>

        <div>
          <span className="flex py-4 not-italic font-normal text-sm leading-4 text-black">
            <img
              src={IconDarkCalendar}
              className="mr-2"
              alt="icon-dark-calendar"
            />
            De 26 a 28 de Maio
          </span>
        </div>

        <div>
          <span className="flex not-italic font-normal text-sm leading-4 text-black">
            <img src={IconDarkClock} className="mr-2" alt="icon-dark-clock" />
            08 Horas
          </span>
        </div>

        <div className="flex mt-6 justify-between">
          <a
            href="www"
            className="mr-2 rounded-[200px] bg-orange-600 p-2 items-center px-3"
          >
            <span className="not-italic font-bold text-sm leading-4 text-white mr-4">
              Comprar
            </span>
            <span className="not-italic font-bold text-sm leading-4 text-white">
              15€
            </span>
          </a>

          <a
            href="www"
            className="flex mr-2 rounded-[200px] p-2 items-center justify-center"
          >
            <span className="not-italic font-bold text-sm leading-4 text-black opacity-30">
              Saiba mais
            </span>
            <img
              src={IconArrowRight}
              className="ml-2 h-2"
              alt="icon-arrow-right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
