import Image from "next/image";
import React from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const Recipes = () => {
  return (
    <div className="flex px-[30px] laptop:px-[75px] mb-[87px] mt-[100px]">
      {/* <div className="gap-[20px] laptop:flex">
        <div className="">
          <h2 className="text-[58px] font-light">Рецепты</h2>
          <p className="text-[15px] text-[#747D85]">
            52 отборных рецепта для всей семьи от мала до велика
          </p>
        </div>
        <div className="flex justify-between">
          <div className="relative flex">
            <a href="/">
              <Image
                src="/pizza.png"
                width={300}
                height={410}
                alt="pizza"
                className="rounded-[20px]"
              />
              <span className="z-50 absolute top-[80%] left-[29px] text-[24px] text-white">
                Пицца маргарита на слоеном тесте
              </span>
            </a>
          </div>
          <div className="relative">
            <a href="/">
              <Image
                src="/pasta.png"
                width={300}
                height={410}
                alt="pizza"
                className="rounded-[20px]"
              />
              <span className="z-50 absolute top-[80%] left-[29px] text-[24px] text-white">
                Паста Паппарделье
              </span>
            </a>
          </div>
          <div className="relative">
            <a href="/">
              <Image
                src="/pizza-2.png"
                width={300}
                height={410}
                alt="pizza"
                className="rounded-[20px]"
              />
              <span className="z-50 absolute top-[80%] left-[29px] text-[24px] text-white">
                Пицца Лазаньетте
              </span>
            </a>
          </div>
        </div>
      </div> */}
      <div className="laptop:flex m-auto">
        <div className="mr-[30px] mb-[30px]">
          <h2 className="text-[#43464A] text-[58px] font-light">Рецепты</h2>
          <p className="text-[#747D85] text-[15px]">
            52 отборных рецепта для всей семьи от мала до велика
          </p>
        </div>
        <div className="block md:flex justify-between gap-[20px]">
          <div className="relative flex mb-[20px] md:mb-0">
            <Image
              src="/pizza.png"
              width={430}
              height={410}
              alt="pizza"
              className="rounded-[20px]"
            />
            <span className="absolute top-[70%] left-[10%] max-w-[213px] text-[20px] laptop:text-[24px] text-white">
              Пицца маргарита на слоеном тесте
            </span>
          </div>
          <div className="relative flex mb-[20px] md:mb-0">
            <Image
              src="/pasta.png"
              width={430}
              height={410}
              alt="pizza"
              className="rounded-[20px]"
            />
            <span className="absolute top-[70%] left-[10%] max-w-[213px] text-[20px] laptop:text-[24px] text-white">
              Паста Паппарделье
            </span>
          </div>
          <div className="relative flex">
            <Image
              src="/pizza-2.png"
              width={430}
              height={410}
              alt="pizza"
              className="rounded-[20px]"
            />
            <span className="absolute top-[70%] left-[10%] max-w-[213px] text-[20px] laptop:text-[24px] text-white">
              Пицца Лазаньетте
            </span>
          </div>
        </div>
        <div className="flex justify-center mt-[30px]">
          <a
            href="/"
            className={`laptop:hidden inline-flex bg-[#0057A5] rounded-[45px] text-[13px] py-[15px] px-[37px] gap-[5px] justify-center ${inter.className}`}
          >
            <Image src="/salt.svg" width={15} height={15} alt="" />
            <span className="uppercase text-white">все рецепты</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
