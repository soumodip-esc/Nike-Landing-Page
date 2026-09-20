import { ReviewCard } from "../components";
import { reviews } from "../constants";

const CustomerReview = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin font-bold text-center text-4xl">
        What Our
        <span className="text-coral-red"> Customers </span> Say?
      </h3>
      <p className="m-auto mt-4 max-w-lg info-text">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="flex flex-1 justify-evenly items max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReview;
