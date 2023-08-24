/* eslint-disable react/prop-types */
import { star } from "../assets/icons";

const ProductsCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img
        src={imgURL}
        alt={name}
        className="w-[280px] h-[280px] object-contain"
      />
      <div className="w-full flex justify-start gap-2.5 mt-8">
        <img src={star} alt="rating" height={24} width={24} />
        <p className="font-montserrat text-lg text-slate-gray">(4.5)</p>
      </div>

      <h3 className="mt-2 text-2xl font-palanquin leading-normal font-semibold">
        {name}
      </h3>

      <p className="mt-2 text-2xl font-montserrat leading-normal text-coral-red font-semibold">
        {price}
      </p>
    </div>
  );
};

export default ProductsCard;
