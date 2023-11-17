import React from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const ButtonMore = () => {
  return (
    <div className={inter.className}>
      <div className="flex justify-center uppercase">
        <a href="">
          <div className="w-[330px] flex gap-[10px] justify-center rounded-[40px] h-[50px] items-center shadow-sm shadow-[#E0DFDC]">
            <img src="/load.svg" alt="load" className="w-[20px] h-[20px]" />
            <p className="text-[13px] text-[#43464A]">
              Показать ещё 20 магазинов
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ButtonMore;
