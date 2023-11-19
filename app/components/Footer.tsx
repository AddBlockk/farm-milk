import Image from "next/image";
import React from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const Footer = () => {
  return (
    <div className="max-w-[1440px]">
      <div>
        <div className="bg-[#0057A5]">
          <div className="max-w-[1290px] m-auto px-[10px]">
            <div className="block items-center gap-[136px] py-[44px] lg:flex">
              <h2 className="text-white text-[24px] font-light max-w-[456px] text-center m-auto lg:mb-[0px] lg:text-start ">
                Подпишитесь на рассылку, чтобы первыми узнавать о новостях и
                акциях
              </h2>
              <label className={`relative ${inter.className} w-full `}>
                <input
                  placeholder="Введите ваш E-mail"
                  className="text-[13px] text-white w-full h-[54px] bg-[#00417A] rounded-[75px] pl-[28px] mb-[20px]"
                />
                <button className="bg-white text-[13px] relative top-0 right-0 bottom-0 m-auto text-[#43464A] w-[220px] flex gap-[10px] justify-center rounded-[40px] h-[54px] items-center font-medium lg:absolute lg:m-0">
                  ПОДПИСАТЬСЯ
                </button>
              </label>
            </div>
          </div>
        </div>
        <div
          className={`max-w-[1290px] m-auto mt-[48px] ${inter.className} px-[10px]`}
        >
          <div className="justify-between md:flex">
            <div>
              <a href="/">
                <Image
                  src="/logo.svg"
                  width={150}
                  height={84}
                  alt="logo"
                  className="max-w-[150px] m-auto sm:m-0"
                />
              </a>
            </div>
            <div className="m-auto">
              <div className="justify-between mb-[70px] sm:gap-[116px] text-center sm:flex sm:text-start">
                <div>
                  <ul className="justify-between flex-wrap text-[#43464A] font-regular md:mb-[88px] md:flex mb-[10px]">
                    <li>
                      <a href="/">Продукция</a>
                    </li>
                    <li>
                      <a href="/">О бренде</a>
                    </li>
                    <li>
                      <a href="/">Производство</a>
                    </li>
                    <li>
                      <a href="/">Рецепты</a>
                    </li>
                    <li>
                      <a href="/">Контакты</a>
                    </li>
                  </ul>
                  <div className="font-light items-center flex">
                    <div className="m-auto gap-[10px] lg:gap-[100px] md:flex">
                      <div className="text-[#43464A] items-center max-w-[320px]">
                        <p className="text-[#8F9399] text-[13px]">
                          По вопросам качества
                        </p>
                        <p className="text-[16px] text-[#43464A] lg:text-[40px]">
                          8 999 999 99 99
                        </p>
                      </div>
                      <div className="max-w-[330px]">
                        <p className="text-[#8F9399] text-[13px]">
                          Физический адрес
                        </p>
                        <p className="items-center h-[60px] flex">
                          Астраханская область, город Астрахань, ул Куликова, д.
                          42
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <button className="text-[13px] w-[220px] gap-[10px] justify-center rounded-[40px] h-[50px] items-center shadow-md shadow-[#E0DFDC] text-[#43464A] mt-4 sm:mt-0">
                    ОБРАТНАЯ СВЯЗЬ
                  </button>
                  <div className="flex justify-center sm:justify-normal gap-[10px] mt-[50px]">
                    <a href="/">
                      <div className="w-[40px] h-[40px] border-none shadow-md shadow-[#E0DFDC] rounded-full items-center flex justify-center">
                        <Image
                          src="/vk.svg"
                          width={16}
                          height={9.52}
                          alt="vk"
                          className="flex items-center"
                        />
                      </div>
                    </a>

                    <a href="/">
                      <div className="w-[40px] h-[40px] border-none shadow-md shadow-[#E0DFDC] rounded-full items-center flex justify-center">
                        <Image
                          src="/facebook.svg"
                          width={8.36}
                          height={16}
                          alt="facebook"
                        />
                      </div>
                    </a>
                    <a href="/">
                      <div className="w-[40px] h-[40px] border-none shadow-md shadow-[#E0DFDC] rounded-full items-center flex justify-center">
                        <Image
                          src="/inst.svg"
                          width={16}
                          height={16}
                          alt="instagram"
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-between border-t-[1px] border-[#bec3cc] mb-[37px] text-center sm:flex">
            <div className="gap-[64px] text-[#8F9399] text-[13px] mt-[27px] sm:flex">
              <p>2023 © Простоквашино</p>
              <p>Политика обработки персональных данных</p>
            </div>
            <div className="text-[#8F9399] text-[12px] pt-[27px] m-auto md:mr-[33px] sm:mt-27px">
              <p>
                Создание и поддержка -
                <span className="text-[#43464A]"> Boltach</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
