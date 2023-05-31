import React from "react";

// Assets
import WomanSkill from "../../assets/imgs/woman-skill.png";

const Skills: React.FC = () => {
  return (
    <div className="bg-[url('/src/assets/imgs/bg-skills.png')] md:w-full w-full h-[900px] md:h-[650px] mt-2">
      <div className="flex w-full justify-between pt-8 px-8 mx-auto max-w-screen-xl">
        <div></div>
        <img src={WomanSkill} className="w-[400px] h-auto" alt="woman-skill" />

      </div>
    </div>
  );
};

export default Skills;
