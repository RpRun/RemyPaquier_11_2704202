import { GrStar } from "react-icons/gr";
import "./StarRating.scss";

const StarRating = ({ note }) => {
  console.log(note);
  return (
    <div className="rating">
      {[...Array(5)].map((star, index) => {
        index += 1;

        return (
          <GrStar className={index <= note ? "starFilled" : "starEmpty"} />
        );
      })}
    </div>
  );
};

export default StarRating;
