"use client";
import React from "react";
import CourseCard from "../CourseCard";
import { useCourse } from "../../context/courses";

const CoursesSchedule: React.FC = () => {
  const { courses, loading } = useCourse();

  if (loading) return;

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

      <div className="px-4 mt-10 mb-56">
        <div className="flex flex-wrap justify-center max-md:space-y-20">
          {courses?.map((item, index) => {
            return <CourseCard item={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CoursesSchedule;
