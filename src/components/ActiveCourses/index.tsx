"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import moment from "moment";

// Assets
import IconCalendar from "../../assets/imgs/icon-calendar.png";
import IconClock from "../../assets/imgs/icon-clock.png";

// Components
import Counter from "../Counter";

// Context
import { useCourse } from "../../context/courses";

const ActiveCourses: React.FC = () => {
  const { courses } = useCourse();
  const [counter, setCounter] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const activeCourse = useMemo(() => {
    return {
      title: courses[0]?.properties.title.multi_select[0].name,
      description: courses[0]?.properties.description.rich_text[0].text.content,
      details: courses[0]?.properties.details.rich_text[0].text.content,
      learning: courses[0]?.properties.learning.multi_select,
      start: moment(courses[0]?.properties.start.date.start).format("ll"),
      end: moment(courses[0]?.properties.end.date.start).format("ll"),
      time: `${courses[0]?.properties.hours.rich_text[0].text.content} ${
        courses[0]?.properties.hours.rich_text[0].text.content > 1
          ? "Horas"
          : "Hora"
      }`,
      url: courses[0]?.properties.URL.url,
      price: `${
        courses[0]?.properties.price?.rich_text[0].text.content || "--"
      } €`,
      days: counter.days || 0,
      hours: counter.hours || 0,
      minutes: counter.minutes || 0,
      seconds: counter.seconds || 0,
    };
  }, [counter.days, counter.hours, counter.minutes, counter.seconds, courses]);

  const getCounter = useCallback(() => {
    var countDownDate = new Date(
      moment(courses[0]?.properties.start?.date.start).format("LLL")
    ).getTime();
    var x = setInterval(function () {
      var now = new Date().getTime();
      var timeToDate = countDownDate - now;
      var days = Math.floor(timeToDate / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (timeToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((timeToDate % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((timeToDate % (1000 * 60)) / 1000);
      if (days && hours && minutes && seconds > 0) {
        setCounter({ days, hours, minutes, seconds });
      }
      if (timeToDate < 0) {
        clearInterval(x);
      }
    }, 1000);
  }, [courses]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      getCounter();
    }
  }, [getCounter]);

  return (
    <div className="bg-[url('/imgs/banner.png')] md:w-full w-full h-[900px] md:h-[650px]">
      <div className="w-full pt-8 flex-col px-8 mx-auto max-w-screen-xl">
        <div className="mt-20 max-w-[630px]">
          <span className="not-italic font-bold text-5xl text-white leading-9">
            {activeCourse.description ||
              "Barman: Como preparar e criar bebidas"}
          </span>
        </div>

        <div className="mt-6 max-w-[630px]">
          <span className="not-italic font-medium text-base leading-6 text-white text-opacity-80">
            {activeCourse.details || ""}
          </span>
        </div>
        <div className="justify-between sm:flex">
          <div className="mt-6 max-w-[630px]">
            <span className="not-italic font-medium text-base leading-6 text-white text-opacity-80">
              Com este curso grátis de Bartender, o aluno aprenderá:
            </span>
            <ul className="list-disc not-italic font-medium text-base leading-6 text-white text-opacity-80 pl-4">
              {activeCourse?.learning
                ? activeCourse?.learning.map(
                    ({ id, name }: { id: string; name: string }) => (
                      <li key={id}>{name}</li>
                    )
                  )
                : null}
            </ul>
          </div>

          <div className="my-4">
            <div className="flex ml-1">
              <div className="backdrop-blur-md bg-white/10 backdrop-opacity-6 rounded-[2000px] mr-2">
                <span className="flex p-3 px-4 not-italic font-normal text-sm leading-4 text-white">
                  <Image
                    src={IconCalendar}
                    className="mr-2"
                    alt="icon-calendar"
                  />
                  {activeCourse.start
                    ? `${activeCourse.start} a ${activeCourse.end}`
                    : "De 26 a 28 de Maio"}
                </span>
              </div>
              <div className="backdrop-blur-md bg-white/10 backdrop-opacity-6 rounded-[2000px]">
                <span className="flex p-3 px-4 not-italic font-normal text-sm leading-4 text-white">
                  <Image src={IconClock} className="mr-2" alt="icon-clock" />
                  {activeCourse.time}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap">
              <Counter title="Dias" value={activeCourse.days.toString()} />
              <Counter title="Horas" value={activeCourse.hours.toString()} />
              <Counter
                title="Minutos"
                value={activeCourse.minutes.toString()}
              />
              <Counter
                title="Segundos"
                value={activeCourse.seconds.toString()}
              />
            </div>
          </div>
        </div>

        <div className="max-w-[630px]">
          <a
            href="/page"
            className="bg-[#FF7112] rounded-[2000px] p-3 not-italic font-bold text-base leading-5 text-white mr-3 font-sans"
          >
            Comprar {activeCourse.price}
          </a>
          <a
            href={activeCourse.url}
            target="_blank"
            className="border-orange-600 border rounded-[2000px] p-3 not-italic font-bold text-base leading-5 text-white font-sans"
            rel="noreferrer"
          >
            Saber mais
          </a>
        </div>
      </div>
    </div>
  );
};

export default ActiveCourses;
