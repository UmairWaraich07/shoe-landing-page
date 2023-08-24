import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffers = () => {
  return (
    <section
      id="offers"
      className="w-full max-container flex justify-between items-center
  gap-10 max-xl:flex-col-reverse "
    >
      <div className="flex-1">
        <img
          src={offer}
          alt="special offer"
          width={773}
          height={687}
          className="object-contain"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className=" text-4xl font-bold font-palanquin capitalize lg:max-w-lg">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 info-text lg:max-w-lg">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>

        <div className="mt-11 flex justify-start items-center flex-wrap gap-4">
          <Button label="View details" icon={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            textColor="text-slate-gray"
            borderColor="border-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
