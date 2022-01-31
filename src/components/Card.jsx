import React from "react";
import star from "../images/star.png";

function Card(props) {
  const { title, price, coverImg, stats, location, openSpots } =
    props.item;
  const { rating, reviewCount } = stats;
  let badgeText;
  if (openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (location.toUpperCase() === "ONLINE") {
    badgeText = "ONLINE"
  }
  return (
    <div className="card">
      {badgeText && <div className="card-badge">{ badgeText }</div>}
      <img src={`../images/${coverImg}`} alt="" className="card-image" />
      <div className="card-stats">
        <img src={star} alt="" className="card-star" />
        <span>{rating}</span>
        <span className="grey">
          ({reviewCount}) &bull; {location}
        </span>
      </div>
      <p className="title">{title}</p>
      <p className="cost">
        <span className="bold">From ${price}</span> / person
      </p>
    </div>
  );
}

export default Card;
