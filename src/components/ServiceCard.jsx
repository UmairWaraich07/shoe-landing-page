const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div
      className="flex flex-col justify-start items-start sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px]
    shadow-3xl px-10 py-16"
    >
      <div className="w-11 h-11 bg-coral-red rounded-full flex justify-center items-center">
        <img
          src={imgURL}
          alt="service"
          width={24}
          height={24}
          className="object-contain"
        />
      </div>
      <h4 className="mt-5 text-3xl leading-normal font-palanquin font-bold ">
        {label}
      </h4>
      <p className="mt-3 font-montserrat leading-normal text-slate-gray text-lg break-words">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
