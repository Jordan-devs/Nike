import React, { useState } from "react";
import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../Constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../Components/ShoeCard";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col  justify-center  min-h-screen max-container gap-10"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full sm:px-16 xl:px-0 px-8 max-xs:px-4 pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="font-poppins text-8xl font-bold max-sm:text-[72px] max-sm:leading-[82px] max-sm:mt-6 mt-10">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike </span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-12 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconURL={arrowRight} />

        <div className="flex justify-start items-start w-full flex-wrap gap-16 mt-20">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="font-poppins text-4xl font-extrabold">
                {stat.value}
              </p>
              <p className="font-montserrat leading-7 text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative  flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-[url(assets/images/collection-background.svg)] bg-cover bg-center">
        <img
          src={bigShoeImg}
          alt="Shoe collection"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe.bigShoe}>
              <ShoeCard
                imgURL={shoe}
                changeBig={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
