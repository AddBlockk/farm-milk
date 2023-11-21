import React from "react";

const Statistic = () => {
  return (
    <div>
      <div className="pb-[35px] hidden flex-col items-center laptop:flex">
        <span className="relative text-[62px] leading-none text-[#0057a5]">
          45%
        </span>
        <small className="mt-[10px] text-[16px] leading-snug uppercase text-[#0057a5]">
          Жирности
        </small>
      </div>
      <span className="text-[#8F9399] text-[15px] block laptop:hidden mb-[16px]">
        На 100 г продукта:
      </span>
      <div className="mb-[16px] flex font-light">
        <span className="flex flex-grow after:relative after:top-[-0.3em] after:m-[0_5px] after:inline-block after:flex-grow after:bg-[url('https://dolubovo.ru/img/line-dots.svg')] after:bg-repeat-x after:bg-bottom ">
          Вес нетто
        </span>
        200 г
      </div>
      <div className="mb-[16px] flex font-light">
        <span className="flex flex-grow after:relative after:top-[-0.3em] after:m-[0_5px] after:inline-block after:flex-grow after:bg-[url('https://dolubovo.ru/img/line-dots.svg')] after:bg-repeat-x after:bg-bottom ">
          Жирность
        </span>
        45 %
      </div>
      <div className="mb-[16px] flex font-light">
        <span className="flex flex-grow after:relative after:top-[-0.3em] after:m-[0_5px] after:inline-block after:flex-grow after:bg-[url('https://dolubovo.ru/img/line-dots.svg')] after:bg-repeat-x after:bg-bottom ">
          Белок на 100 г
        </span>
        23 г
      </div>
      <div className="mb-[16px] flex font-light">
        <span className="flex flex-grow after:relative after:top-[-0.3em] after:m-[0_5px] after:inline-block after:flex-grow after:bg-[url('https://dolubovo.ru/img/line-dots.svg')] after:bg-repeat-x after:bg-bottom ">
          Калорийность
        </span>
        330 ккал / 1390 кДж
      </div>
    </div>
  );
};

export default Statistic;
