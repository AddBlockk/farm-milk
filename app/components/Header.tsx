import React, { useEffect, useState } from "react";
import Image from "next/image";
import Bread from "./Bread";
import db from "@/localDb.json";
import { Inter } from "next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });
const Header = () => {
  return (
    <div className={`mt-[10px] flex z-3 max-w-[1440px] ${inter.className}`}>
      <ul className="justify-between w-[1290px] m-auto flex-wrap text-[#43464A] hidden md:flex px-4">
        {db.menuItems.map((item, index) => (
          <li key={index} className={`pt-[30px]`}>
            <Link href={item.link}>
              {item.name}
              {item.image && <img src={item.image} alt={item.name} />}
            </Link>
          </li>
        ))}
      </ul>
      <ul className="md:hidden">
        <Image src="/burger.svg" width={42} height={42} alt="menu" />
      </ul>
    </div>
  );
};

export default Header;
