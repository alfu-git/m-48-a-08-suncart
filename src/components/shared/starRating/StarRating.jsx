import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const StarRating = ({ rating }) => {
  const totalStars = 5;

  return (
    <div className="flex gap-1 text-[#E46212]">
      {[...Array(totalStars)].map((_, i) => {
        const starNumber = i + 1;

        if (rating >= starNumber) {
          return <FaStar key={i} />;
        } else if (rating >= starNumber - 0.5) {
          return <FaStarHalfAlt key={i} />;
        } else {
          return <FaRegStar key={i} />;
        }
      })}
    </div>
  );
};

export default StarRating;
