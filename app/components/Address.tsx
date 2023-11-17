import React from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import db from "@/localDb.json";
import ButtonMore from "./ButtonMore";
const Address = () => {
  return (
    <div className="mb-[150px]">
      <div className="flex flex-wrap justify-center max-w-[1290px] m-auto gap-[30px] mb-[53px]">
        {db.addresses.map((address, index) => (
          <a key={index} href="">
            <div className="border-[1px] border-[#E0DFDC] rounded-[20px] w-[270px] md:w-[410px] shadow-sm shadow-[#E0DFDC] pb-[30px]">
              <div className="mt-[15px] ml-[24px] md:mt-[30px] md:ml-[46px]  gap-4">
                <h2 className="text-[32px]">{address.name}</h2>
                <div className={inter.className}>
                  <span className="flex items-center gap-[7px]">
                    <img
                      src="/location.svg"
                      alt=""
                      className="w-[20px] h-[20px]"
                    />
                    <p className="text-[18px]">{address.address}</p>
                  </span>
                  <span className="text-[14px] text-[#8F9399]">
                    {address.schedule}
                  </span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
      <ButtonMore />
    </div>
  );
};

export default Address;
