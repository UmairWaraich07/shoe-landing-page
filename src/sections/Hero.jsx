import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";

const Hero = () => {
  const [bigShoe, setBigShoe] = useState(bigShoe1);

  return (
    <section
      id="hero"
      className="w-full flex xl:flex-row flex-col justify-center gap-10 min-h-screen 
      max-container bg-white "
    >
      <div
        className="relative xl:w-2/5 w-full flex flex-col justify-center items-start max-xl:padding-x
      pt-28"
      >
        <p className="text-coral-red text-xl font-montserrat">
          Our Summer collections
        </p>
        <h1
          className="text-black z-10  font-bold font-palanquin mt-10 text-8xl max-sm:text-[72px]
         max-sm:leading-[82px] "
        >
          <span className="xl:bg-white  xl:whitespace-nowrap relative lg:z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="mt-6 mb-14 text-slate-gray text-lg max-sm:max-w-sm leading-8">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <Button label="Shop now" icon={arrowRight} />

        <div className="w-full flex items-start justify-start gap-16 mt-20 flex-wrap">
          {statistics.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-start justify-start flex-wrap
            "
            >
              <p className="font-bold font-palanquin text-4xl">{stat.value}</p>
              <p className="text-slate-gray font-montserrat leading-7">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        className="relative flex-1 flex justify-center items-center w-full bg-primary bg-hero bg-center bg-cover
       max-xl:py-40 xl:min-h-screen"
      >
        <img
          src={bigShoe}
          alt="Shoe"
          width={600}
          height={500}
          className="object-contain z-10"
        />
        <div className="absolute flex -bottom-[5%] sm:left-[10%] max-sm:px-6 gap-4 sm:gap-6 w-full">
          {shoes.map((shoe) => (
            <ShoeCard
              key={shoe}
              bigShoeImg={bigShoe}
              imgURL={shoe.bigShoe}
              setBigShoeImg={setBigShoe}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
