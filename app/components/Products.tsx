"use client";

import React, { useEffect } from "react";
import axios from "axios";
import db from "@/localDb.json";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const Products = () => {
  // const products = [
  //   {
  //     image: "/Ice-cream-1.png",
  //     title: "Фермерский",
  //     description: "ДОМАШНИЙ",
  //   },
  //   {
  //     image: "/Ice-cream-2.png",
  //     title: "Лёгкий",
  //     description: "СЛИВОЧНЫЙ",
  //   },
  //   {
  //     image: "/Ice-cream-1.png",
  //     title: "Фермерский",
  //     description: "ДОМАШНИЙ",
  //   },
  //   {
  //     image: "/Ice-cream-1.png",
  //     title: "Тильзетер",
  //     description: "ШВЕЙЦАРСКИЙ",
  //   },
  //   { image: "/Ice-cream-1.png", title: "Гауда", description: "ГОЛЛАНДСКИЙ" },
  // ];
  // useEffect(() => {
  //   const postFn = async () => {
  //     const api = "http://localhost:3004/addresses";

  //     const newAddress = {
  //       name: "new",
  //       address: "new",
  //       schedule: "new",
  //     };

  //     try {
  //       const result = await axios.post(api + "/3");
  //       console.log(result);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   postFn();
  // }, []);

  return (
    <div className="relative mb-[200px]">
      <img
        src="/bg-productions.png"
        alt=""
        className="absolute left-0 right-0 top-0 -z-50"
      />
      <div className="pt-[160px] text-[#43464A]">
        <h1 className="text-[52px] text-center mb-[30px]">Продукция</h1>
        <div className="max-w-[1290px] m-auto place-items-center wrapper">
          {db.productions.map((product, index) => (
            <a key={index} href="">
              <div
                className={`border-[1px] border-[#E0DFDC] rounded-[20px] w-[270px] bg-white shadow-sm shadow-[#F3F3F1] md:w-[410px]
                }`}
              >
                <div className="flex justify-center mt-[41px] mb-[21px]">
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="mb-[42px]">
                  <h2 className="text-center text-[42px] text-[#43464A]">
                    {product.title}
                  </h2>
                  <p
                    className={`text-center text-[16px] text-[#8F9399] tracking-[.17em] ${inter.className}`}
                  >
                    {product.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
