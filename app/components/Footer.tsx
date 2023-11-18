import Image from "next/image";
import React from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const Footer = () => {
  return (
    <div className="max-w-[1440px] ">
      <div className={`${inter.className}`}>
        <div className="bg-[#0057A5]">
          <div className="max-w-[1290px] m-auto">
            <div>
              <h2 className="text-white text-[24px]">
                Подпишитесь на рассылку, чтобы первыми узнавать о новостях и
                акциях
              </h2>
              <label>
                <input
                // type="text"
                // id="name"
                // name="name"
                // required
                // minlength="4"
                // maxlength="8"
                // size="10"
                />
                <button className="bg-white text-[13px] text-[#43464A] w-[220px] flex gap-[10px] justify-center rounded-[40px] h-[50px] items-center shadow-sm shadow-[#E0DFDC]">
                  ПОДПИСАТЬСЯ
                </button>
              </label>
            </div>
          </div>
        </div>
        <div className="max-w-[1290px] m-auto">
          <div className="flex items-center justify-between">
            <Image src="/logo.svg" width={150} height={84} alt="logo" />
            <ul className="flex w-[60%] justify-between text-[#43464A]">
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
            <button className="text-[13px] w-[220px] flex gap-[10px] justify-center rounded-[40px] h-[50px] items-center shadow-sm shadow-[#E0DFDC] text-[#43464A]">
              ОБРАТНАЯ СВЯЗЬ
            </button>
          </div>
          <div className="flex">
            <div>
              <p className="text-[#8F9399]">По вопросам качества</p>
              <h1 className="text-[46px] text-[#43464A]">8 999 999 99 99</h1>
            </div>
            <div>
              <p className="text-[#8F9399]">Физический адрес</p>
              <p className="text-[#43464A]">
                Астраханская область, город Астрахань, ул Куликова, д. 42
              </p>
            </div>
            <div>
              <a href="/"></a>
              <a href="/"></a>
              <a href="/"></a>
            </div>
          </div>
          <div className="flex justify-between border-t-[1px] border-[#bec3cc] mb-[37px]">
            <div className="gap-[64px] flex text-[#8F9399] text-[13px] mt-[27px]">
              <span>2023 © Простоквашино</span>
              <span>Политика обработки персональных данных</span>
            </div>
            <div className="text-[#8F9399] text-[12px] mt-[27px] mr-[33px]">
              <span>
                Создание и поддержка -
                <span className="text-[#43464A]">Boltach</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
