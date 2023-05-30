interface Icounter {
  title: string;
  value: string;
}

const Counter = ({ title, value }: Icounter) => {
  return (
    <div className="flex-col flex backdrop-blur-md backdrop-opacity-6 rounded-[10px] w-[142px] h-[142px] items-center justify-center m-2 text-center">
      <div className="items-center text-center">
        <span className="not-italic font-semibold text-5xl text-white leading-6">
          {value}
        </span>
      </div>

      <div className="items-center text-center">
        <span className="not-italic font-semibold text-xs leading-4 text-white">
          {title}
        </span>
      </div>
    </div>
  );
};

export default Counter;
