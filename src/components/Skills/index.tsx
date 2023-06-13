import React from "react";
import Image from "next/image";

// Assets
import WomanSkill from "../../assets/imgs/woman-skill.png";

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
              Lorem ipsum dolor sit amet. Et galisum obcaecati est consectetur
              accusamus est sint earum est nihil eligendi ut illum nisi aut
              deserunt nihil! In voluptatibus obcaecati est voluptatem galisum
              sed placeat omnis aut recusandae laboriosam ut atque consequatur
              ab optio dolor.
            </span>
          </div>
          <div className=" mt-12">
            <a
              href="#www"
              className="w-56 h-12 rounded-[2000px] p-3 px-5 bg-gradient-to-r from-[#FF7112] to-[#FFA56A] not-italic font-bold text-base leading-5 text-white"
            >
              Ver mais Formações
            </a>
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
  );
};

export default Skills;
