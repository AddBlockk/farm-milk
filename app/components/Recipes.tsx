import Image from "next/image";
import React from "react";

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
      <div className="laptop:flex">
        <div className="max-w-[300px] mr-[30px]">
          <h2 className="text-[#43464A] text-[58px] font-light">Рецепты</h2>
          <p className="text-[#747D85] text-[15px]">
            52 отборных рецепта для всей семьи от мала до велика
          </p>
        </div>
        <div className="flex justify-between gap-[20px]">
          <div className="relative flex">
            <Image
              src="/pizza.png"
              width={300}
              height={410}
              alt="pizza"
              className="rounded-[20px]"
            />
            <span className="absolute bottom-[10%] left-[10%] max-w-[213px] text-[24px] text-white">
              Пицца маргарита на слоеном тесте
            </span>
          </div>
          <div className="relative flex">
            <Image
              src="/pizza.png"
              width={300}
              height={410}
              alt="pizza"
              className="rounded-[20px]"
            />
            <span className="absolute bottom-[10%] left-[10%] max-w-[213px] text-[24px] text-white">
              Пицца маргарита на слоеном тесте
            </span>
          </div>
          <div className="relative flex">
            <Image
              src="/pizza.png"
              width={300}
              height={410}
              alt="pizza"
              className="rounded-[20px]"
            />
            <span className="absolute bottom-[10%] left-[10%] max-w-[213px] text-[24px] text-white">
              Пицца маргарита на слоеном тесте
            </span>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Recipes;
