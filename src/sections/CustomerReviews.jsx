import CustomerReviewCard from "../components/CustomerReviewCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section
      id="reviews"
      className="w-full max-container flex items-center justify-center flex-col"
    >
      <div className="flex flex-col justify-center items-center gap-4">
        <h2 className="text-4xl font-palanquin font-bold capitalize text-center">
          What our <span className="text-coral-red">customers</span> say?
        </h2>
        <p className=" lg:max-w-lg text-center info-text m-autoS ">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
      </div>

      <div className="flex flex-1  items-center justify-evenly gap-14 mt-24 max-lg:flex-col">
        {reviews.map((review) => (
          <CustomerReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
