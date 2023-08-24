import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className=" text-4xl font-bold font-palanquin capitalize lg:max-w-lg">
          We Provide You <span className="text-coral-red">Super </span>{" "}
          <span className="text-coral-red">Quality</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, out meticulously crafted footwears
          is designed to elevate your experience, providing you with unmatched
          quality, innovation and touch of elegance.
        </p>
        <p className="mt-6 info-text lg:max-w-lg">
          Our dedictation to detail and excellence ensures your satisfaction.
        </p>

        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>

      <div className="flex items-center justify-center flex-1">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
