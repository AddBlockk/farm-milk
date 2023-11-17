import Image from "next/image";
import React from "react";

const Bread = () => {
  return (
    <div className="relative top-[-30px] -z-[1]">
      <Image src="/bread.png" width={1440} height={675} alt="bread" />
    </div>
  );
};

export default Bread;
