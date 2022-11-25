import React from "react";
import { RatingStar } from "rating-star";


function Ratingstar(props) {

    const [rating, setRating] = React.useState(30);

  const onRatingChange = (score) => {
    setRating(score);
  };
  return (
    <RatingStar
        clickable
        maxScore={100}
        id="123"
        rating={+(props.rank)}
        onRatingChange={onRatingChange}
        numberOfStar={+(props.rank)} 
      />
  );
}

export default Ratingstar;
