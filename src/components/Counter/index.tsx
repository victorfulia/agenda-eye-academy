// Context
import { useCourse } from "../../context/courses";

interface Icounter {
  title: string;
  value: string;
}

const Counter = ({ title, value }: Icounter) => {
  const { loading } = useCourse();
  
  return (
    <div className="flex-col flex backdrop-blur-md bg-white/10 backdrop-opacity-6 rounded-[10px] md:w-[142px] md:h-[142px] w-[112px] h-[112px] items-center justify-center my-3 mx-0.5  text-center">
      <div className="items-center text-center">
        <span className="not-italic font-semibold text-5xl text-white leading-6">
          {loading ? "--" : value}
        </span>
      </div>

      <div className="items-center text-center mt-2">
        <span className="not-italic font-semibold text-xs leading-4 text-white">
          {loading ? "--" : title}
        </span>
      </div>
    </div>
  );
};

export default Counter;
