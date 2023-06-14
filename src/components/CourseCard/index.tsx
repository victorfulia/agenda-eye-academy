import React from "react";
import Image from "next/image";
import moment from "moment";

const CourseCard: React.FC<any> = (card) => {
  const { hours, img, description, start, and, price, color, title, URL } =
    card.item.properties;

  if (!card) return;

  return (
    <div className="flex items-center justify-center mb-32">
      <Image
        src={img?.files[0].file.url}
        className="m-2"
        alt="card"
        height={395}
        width={309}
      />

      <div
        className={`rounded-t-[20px] p-4 py-6 w-[108px] absolute mt-[195px] mr-[177px] ${color?.rich_text[0].text.content}`}
      >
        <span className="flex not-italic font-normal text-sm leading-4 text-black -mt-4">
          {title?.multi_select[0].name}
        </span>
      </div>
      <div className="w-[285px] h-48 flex-col bg-white rounded-[20px] shadow-xl p-4 absolute mt-[400px]">
        <div className="flex items-center">
          <span className="not-italic font-semibold text-base leading-5 text-black">
            {description?.rich_text[0].text.content}
          </span>
        </div>

        <div>
          <span className="flex py-4 not-italic font-normal text-sm leading-4 text-black">
            <Image
              src="/imgs/icon-dark-calendar.png"
              className="mr-2"
              width={13.46}
              height={14.44}
              alt="icon-dark-calendar"
            />
            {moment(start?.date.start).format("ll")} a{" "}
            {moment(and?.date.start).format("ll")}
          </span>
        </div>

        <div>
          <span className="flex not-italic font-normal text-sm leading-4 text-black">
            <Image
              src="/imgs/icon-dark-clock.png"
              width={13.71}
              height={14.86}
              className="mr-2"
              alt="icon-dark-clock"
            />
            {hours?.rich_text[0].text.content || "--"}{" "}
            {hours?.rich_text[0].text.content > 1 ? "Horas" : "Hora"}
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
              {price?.rich_text[0].text.content}€
            </span>
          </a>

          <a
            href={URL?.url}
            target="_blank"
            className="flex rounded-[200px] p-2 items-center justify-center"
            rel="noreferrer"
          >
            <span className="not-italic font-bold text-sm leading-4 text-black opacity-30">
              Saiba mais
            </span>
            <Image
              src="/imgs/icon-arrow-right-opacity.png"
              className="ml-2"
              width={10.5}
              height={6}
              alt="icon-arrow-right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
