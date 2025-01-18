import ReastuarantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listofRestaurants, setlistOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestuarant] = useState([]);
  const [searchText, setSearchText] = useState("");
  console.log("Body Rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0239923&lng=77.643294&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);

    if (
      !json ||
      !json.data ||
      !json.data.cards ||
      !json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    ) {
      setlistOfRestaurant([]);
      return <div>No data available</div>;
    }

    setlistOfRestaurant(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestuarant(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  return listofRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              console.log(searchText);
              const filteredRestaurant = listofRestaurants.filter((res) => {
                const restaurantName = res.info?.name || "";
                return restaurantName
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRestuarant(filteredRestaurant);
            }}
          >
            search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listofRestaurants.filter(
              (res) => res.info?.avgRating > 4
            );
            setFilteredRestuarant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <ReastuarantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
