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
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars </h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTimeString} minutes</h4>
    </div>
  );
};

export default ReastuarantCard;
