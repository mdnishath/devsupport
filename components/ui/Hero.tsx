import { Button } from "@/components/ui/button";
// import Container from "@/components/ui/Container";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col items-center  px-2">
        <Image
          src={"/dev2.webp"}
          width={300}
          height={300}
          alt="nishath"
          className=" rounded-full border-4 border-slate-600 shadow-2xl transition-transform transform hover:scale-105 hover:-rotate-3 hover:skew-y-0 w-[200px] h-[200px]"
        />
        <div className="mt-8 text-center">
          <h1 className="text-2xl md:text-4xl mt-4 font-bold text-slate-300">
            Dedicated Premium Support
          </h1>
          <p className="md:w-[600px] mx-auto mt-4 text-lg">
            Offering dedicated support for customers to ensure smooth setup and
            optimal performance of the Google Address Autocomplete plugin. Get
            expert guidance tailored to your needs.
          </p>
          <div className="flex gap-4 items-center justify-center">
            <Button className="md:mt-12 mt-4 p-6 text-xl rounded-full uppercase">
              Buy Premium
            </Button>
            <Button className="md:mt-12 mt-4 p-6 text-xl bg-green-500 hover:bg-green-500 rounded-full uppercase">
              Free Download
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
