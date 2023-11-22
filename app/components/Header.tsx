import React, { useEffect, useState } from "react";
import Image from "next/image";
import Bread from "./Bread";
import db from "@/localDb.json";
import Link from "next/link";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const Header = () => {
  return (
    <div className={`mt-[10px] flex z-3 max-w-[1440px] ${inter.className}`}>
      <ul className="w-[1290px] m-auto flex-wrap text-[#43464A] hidden laptop:flex   p-0 items-center px-[15px] header">
        {/* {db.menuItems.map((item, index) => (
          <li key={index} className={`top-10 relative  mb-[20px]`}>
            <Link href={item.link}>
              {item.name}
              {item.image && <img src={item.image} alt={item.name} />}
            </Link>
          </li>
        ))} */}
        <li className="relative mr-[80px] p-[42px_0_65px]">
          <a href="/productions" className="inline-block leading-snug">
            Продукция
          </a>
        </li>
        <li className="relative mr-[80px] p-[42px_0_65px]">
          <a href="/" className="inline-block leading-snug">
            О бренде
          </a>
        </li>
        <li className="relative p-[42px_0_65px]">
          <a href="/" className="inline-block leading-snug">
            Где купить
          </a>
        </li>
        <li className="relative mr-[65px] ml-auto p-[42px_0_65px]">
          <a href="/" className="inline-block leading-snug">
            Публикации
          </a>
        </li>
        <li className="relative mr-[65px] p-[42px_0_65px]">
          <a href="/" className="inline-block leading-snug">
            Рецепты
          </a>
        </li>
        <li className="relative mr-[81px] p-[42px_0_65px]">
          <a href="/" className="inline-block leading-snug">
            Контакты
          </a>
        </li>
        <a
          href="/"
          className="absolute top-[20px] left-[49%] inline-block transform -translate-x-1/2"
        >
          <Image src="/logo.svg" width={250} height={130} alt="menu" />
        </a>
        <button className="p-[42px_0_65px] inline-block leading-snug">
          <Image
            src="/search.svg"
            width={18}
            height={18}
            alt="menu"
            className="flex cursor-pointer"
          />
        </button>
      </ul>
      <ul className="laptop:hidden flex justify-between w-[100%] px-[10px] items-start">
        <a href="/" className="mt-8">
          <Image
            src="/burger.svg"
            width={25}
            height={16}
            alt="menu"
            className="flex cursor-pointer"
          />
        </a>
        <a href="/">
          <Image src="/logo.svg" width={250} height={130} alt="menu" />
        </a>
        <a href="" className="mt-8">
          <Image
            src="/search.svg"
            width={18}
            height={18}
            alt="menu"
            className="flex cursor-pointer"
          />
        </a>
      </ul>
    </div>
  );
};

export default Header;
