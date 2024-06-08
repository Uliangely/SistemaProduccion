// components/Banner.js

import React from 'react';
import Image from "next/image";

const Banner = ({ title }) => {
  return (
    <div>
    <div className="flex z-50 fixed bg-gray-800 from-cyan-500 to-green-400 text-white w-screen ">

     <Image src="/logo.png"
          className="ml-6 rounded-full border-2 border-purple-600"
          alt=""
          width={80}
          height={5} 
        /> 

    <h1 className="p-4 y-6 text-2xl font-semibold text-gray-200 pl-40"> {title} </h1>
    </div>
    </div>
  );
};
export default Banner;
