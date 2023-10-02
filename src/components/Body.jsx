import Card from "./Card";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  console.log("hi, in the body");
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredlistOfRestaurants, setfilteredlistOfRestaurants] = useState(
    []
  );
  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9304278&lng=77.678404&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setlistOfRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredlistOfRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (filteredlistOfRestaurants === null) {
    return <h1>Loading ..</h1>;
  }

  return (
    <div>
      <div className="flex p-2 m-2">
        <div className="search">
          <input
            className="m-2 px-3 py-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg "
            type="text"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="px-3 m-2 py-2 bg-slate-100 border  border-gray-300 hover:bg-slate-200 rounded-lg"
            onClick={() => {
              console.log(searchText);

              console.log(
                listOfRestaurants.map((res) => console.log(res.info.name))
              );

              const filtered = listOfRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });

              console.log(filtered);
              setfilteredlistOfRestaurants(filtered);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="px-3 py-2 m-2 bg-slate-100 border border-gray-300 hover:bg-slate-200 rounded-lg"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setlistOfRestaurants(filteredList);
          }}
        >
          Click for Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredlistOfRestaurants
          ? filteredlistOfRestaurants.map((restaurant) => (
              <Link
                key={restaurant.info.id}
                to={"/restaurant/" + restaurant.info.id}
              >
                <Card resData={restaurant} />
              </Link>
            ))
          : null}
      </div>
    </div>
  );
};

export default Body;
