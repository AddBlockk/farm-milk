import Image from "next/image";
import React from "react";
import Statistic from "./Statistic";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const AboutThing = () => {
  return (
    <div className="mt-[30px] max-w-[1290px] m-auto mb-[100px]">
      <ul className="text-[#747D85] flex justify-center gap-4">
        <li>
          <a href="/">Главная</a>
        </li>
        <li>
          <a href="/productions">Продукция</a>
        </li>
        <li className="text-[#ABB0B5]">
          <a href="/">Гауда голландский</a>
        </li>
      </ul>
      <div className="flex items-center mb-[28px]">
        <div className="hidden laptop:block">
          <a href="/" className="flex items-center gap-[14px] absolute">
            <span className="bg-[#f7f8f8] w-[42px] h-[42px] flex justify-center rounded-full">
              <Image src="/back.svg" alt="back" width={4.5} height={9} />
            </span>
            <span className="text-[14px] font-regular text-[#747D85]">
              Вернуться в каталог
            </span>
          </a>
        </div>
        <div className="text-[58px] m-auto max-w-[600px] text-center text-[#43464a] font-light">
          Гауда голландский
        </div>
      </div>
      <div className="flex flex-wrap mx-[30px] laptop:mx-0">
        <div
          className={`px-0 md:max-w-[50%] md:flex-[0_0_50%] mt-[30px] md:mt-0 laptop:max-w-[33.333%] laptop:flex-[0_0_33.33333%] laptop:mt-[80px]  ${inter.className} order-2 md:order-1`}
        >
          <div className="text-[18px] font-light mb-[65px]">
            Этот молодой традиционный сыр, созданный по голландскому рецепту,
            имеет сливочный нежный вкус и сладковатое ореховое послевкусие
            благодаря высококачественному коровьему молоку, что используется на
            Ферме «Долюбово». Мы верим, что наша любовь к сыру объединит вас и
            ваших близких.
          </div>
          <div className="laptop:hidden">
            <Statistic />
          </div>
          <div className="flex justify-center md:block md:justify-normal">
            <div className="relative md:inline-flex">
              <a
                href="/"
                className={`pl-[30px] flex justify-center pr-[40px] py-[14px] w-auto min-w-0  text-[13px] whitespace-nowrap max-w-[100%] tracking-wider uppercase text-white bg-[#0057a5] border-[#0057a5] md:inline-flex font-medium text-center items-center rounded-[45px] before:mr-[15px] before:inline-block before:w-[16px] before:h-[20px] before:bg-[url('/where-buy.svg')] bg-no-repeat ${inter.className}`}
              >
                где купить
              </a>
              <a
                href="/"
                className="pr-0 md:ml-[20px] mt-[20px] md:mt-0 flex justify-center items-center text-[13px] font-medium text-[#0057a5] leading-4 uppercase before:mr-[10px] before:block before:w-[18px] before:h-[18px] before:bg-[url('/share.svg')] bg-no-repeat"
              >
                поделиться
              </a>
            </div>
          </div>
        </div>
        <div className="px-0 max-w-[50%] flex-[0_0_50%] laptop:max-w-[33.333%] laptop:flex-[0_0_33.33333%] order-1 md:order-2 contents md:flex">
          <Image
            src="/ice-cream-4.png"
            alt="Гауда голландский"
            width={245}
            height={485}
            className="m-auto"
          />
        </div>
        <div
          className={`px-0 max-w-[50%] flex-[0_0_50%] laptop:max-w-[33.333%] laptop:flex-[0_0_33.33333%] order-3 hidden laptop:block ${inter.className}`}
        >
          <div className="">
            <Statistic />
          </div>
        </div>
        <div className="hidden justify-between w-full laptop:flex order-4">
          <a href="/" className="flex items-center gap-[14px]">
            <span className="bg-[#f7f8f8] w-[42px] h-[42px] flex justify-center rounded-full">
              <Image src="/back.svg" alt="back" width={4.5} height={9} />
            </span>
            <span className="text-[14px] font-regular text-[#747D85]">
              Тильзитер швейцарский
            </span>
          </a>
          <a href="/" className="flex items-center gap-[14px]">
            <span className="text-[14px] font-regular text-[#747D85]">
              Фермерский домашний (куб)
            </span>
            <span className="bg-[#f7f8f8] w-[42px] h-[42px] flex justify-center rounded-full">
              <Image src="/following.svg" alt="back" width={4.5} height={9} />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutThing;
