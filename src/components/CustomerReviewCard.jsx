import { star } from "../assets/icons";

const CustomerReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src={imgURL}
        alt=""
        width={120}
        height={120}
        className="object-contain rounded-full"
      />

      <p className="max-w-sm text-center info-text mt-6">{feedback}</p>
      <div className="flex items-center gap-2.5 mt-3">
        <img src={star} alt="" width={24} height={24} />
        <p className="font-montserrat text-xl text-slate-gray">({rating})</p>
      </div>

      <h4 className="text-3xl font-bold font-palanquin text-center mt-1">
        {customerName}
      </h4>
    </div>
  );
};

export default CustomerReviewCard;
