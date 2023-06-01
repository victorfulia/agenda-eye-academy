import React from "react";
import CourseCard from "../CourseCard";

// Components
import Card from "../../assets/imgs/card.png";

const CoursesSchedule: React.FC = () => {
  return (
    <div className="w-full pt-8 flex-col px-8">
      <div className="mt-20 flex justify-center items-center">
        <span className="not-italic font-medium text-5xl text-black leading-9">
          Agenda de cursos online
        </span>
      </div>

      <div className="mt-6 flex justify-center items-center">
        <span className="not-italic font-medium text-base leading-6 text-black text-opacity-50">
          Garanta a disponibilidade dos nossos cursos online com os melhores
          profissionais técnicos
        </span>
      </div>

      <div className="px-4 mt-12">
        <div className="flex flex-wrap justify-center">
          {cards.map((item, index) => {
            return <CourseCard {...item} key={index}/>;
          })}
        </div>
      </div>
    </div>
  );
};

const cards = [
  {
    title: "Academia",
    description: "Treino de Bíceps e Tríceps",
    date: "De 26 a 28 de Maio",
    hours: "08 Horas",
    price: "15",
    url: "",
    img: Card,
  },
  {
    title: "Academia",
    description: "Treino de Bíceps e Tríceps",
    date: "De 26 a 28 de Maio",
    hours: "08 Horas",
    price: "15",
    url: "",
    img: Card,
  },
  {
    title: "Academia",
    description: "Treino de Bíceps e Tríceps",
    date: "De 26 a 28 de Maio",
    hours: "08 Horas",
    price: "15",
    url: "",
    img: Card,
  },
  {
    title: "Academia",
    description: "Treino de Bíceps e Tríceps",
    date: "De 26 a 28 de Maio",
    hours: "08 Horas",
    price: "15",
    url: "",
    img: Card,
  },
];

export default CoursesSchedule;
