import Image from "next/image";
import React from "react";

const Recomended = () => {
  return (
    <div className="bg-[url('/bg-productions.png')] bg-no-repeat pb-[70px]">
      <div className="m-auto px-[30px] laptop:px-[75px]">
        <h1 className="text-[42px] text-[#43464A] font-light flex justify-center pt-[100px] mb-[20px]">
          Вам может понравиться
        </h1>
        <div className="flex justify-between gap-[30px] relative flex-wrap">
          <div className="flex-1">
            <div className="bg-[#fff] rounded-[20px] gap-[50px] pt-[24px] pl-[26px] block laptop:flex pb-[20px] laptop:pb-[20px]">
              <a href="/" className="flex justify-center">
                <Image
                  src="/Ice-cream-2.png"
                  width={200}
                  height={200}
                  alt="Сливочное мороженое"
                  className="laptop:w-[150px]"
                />
              </a>
              <div className="laptop:pr-[74px]">
                <h2 className="text-[#0057A5] text-[32px] font-light">
                  Лёгкий сливочный
                </h2>
                <p className="text-[#8F9399] text-[14px]">
                  Пищевая ценность:
                  <span className="text-[#43464A]"> 250 ккал / 1046 кДж</span>
                </p>
                <p className="text-[#8F9399] text-[14px]">
                  Жирность: <span className="text-[#43464A]"> 30%</span>
                </p>
                <div className="inline-flex">
                  <a
                    href="/"
                    className="flex items-center gap-[14px] mt-[17px]"
                  >
                    <span className="text-[14px] font-regular text-[#747D85]">
                      Подробнее
                    </span>
                    <span className="bg-[#f7f8f8] w-[42px] h-[42px] flex justify-center rounded-full">
                      <Image
                        src="/following.svg"
                        alt="back"
                        width={4.5}
                        height={9}
                      />
                    </span>
                  </a>
                </div>
              </div>
              <a
                href=""
                className="bg-[#fff] w-[42px] h-[42px] justify-center rounded-full absolute items-center  -left-[25px] top-[45%] transform translate-y-neg-42 shadow-2xl shadow-black hidden laptop:flex"
              >
                <span>
                  <Image src="/back.svg" alt="back" width={4.5} height={9} />
                </span>
              </a>
            </div>
          </div>

          <div className="flex-1 ">
            <div className="bg-[#fff] rounded-[20px] gap-[50px] pt-[24px] pl-[26px] block laptop:flex pb-[20px] laptop:pb-[20px]">
              <a href="/" className="flex justify-center">
                <Image
                  src="/Ice-cream-2.png"
                  width={200}
                  height={200}
                  alt="Сливочное мороженое"
                  className="laptop:w-[150px]"
                />
              </a>
              <div className="laptop:pr-[74px]">
                <h2 className="text-[#0057A5] text-[32px] font-light">
                  Лёгкий сливочный
                </h2>
                <p className="text-[#8F9399] text-[14px]">
                  Пищевая ценность:
                  <span className="text-[#43464A]"> 250 ккал / 1046 кДж</span>
                </p>
                <p className="text-[#8F9399] text-[14px]">
                  Жирность: <span className="text-[#43464A]"> 30%</span>
                </p>
                <div className="inline-flex">
                  <a
                    href="/"
                    className="flex items-center gap-[14px] mt-[17px]"
                  >
                    <span className="text-[14px] font-regular text-[#747D85]">
                      Подробнее
                    </span>
                    <span className="bg-[#f7f8f8] w-[42px] h-[42px] flex justify-center rounded-full">
                      <Image
                        src="/following.svg"
                        alt="back"
                        width={4.5}
                        height={9}
                      />
                    </span>
                  </a>
                </div>
              </div>
              <a
                href=""
                className="bg-[#fff] w-[42px] h-[42px] justify-center rounded-full absolute items-center  -right-[25px] top-[45%] transform translate-y-neg-42 shadow-2xl shadow-black hidden laptop:flex"
              >
                <span>
                  <Image
                    src="/following.svg"
                    alt="back"
                    width={4.5}
                    height={9}
                  />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recomended;
