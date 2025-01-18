import { CDN_URL } from "../utils/constants";

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const ReastuarantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name = "Unknown Restaurant",
    avgRating = "N/A",
    cuisines = [],
    costForTwo = "N/A",
    deliveryTime = "N/A",
  } = resData?.info || {};

  const deliveryTimeString = resData?.info?.sla?.deliveryTime || "N/A";
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars </h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTimeString} minutes</h4>
    </div>
  );
};

export default ReastuarantCard;
