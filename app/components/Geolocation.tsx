import Image from "next/image";
import React from "react";

const Geolocation = () => {
  return (
    <div className="m-auto mb-[108px]">
      <h1 className="text-[52px] flex justify-center mb-[40px] text-[#43464A] text-center">
        Ферма молока в Астрахани
      </h1>
      <Image
        src="/geolocation.png"
        width={1290}
        height={410}
        alt="Geolocation"
        className="m-auto"
      />
    </div>
  );
};

export default Geolocation;
