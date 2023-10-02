import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setshowIndex] = useState(0);

  if (resInfo === null) {
    return <h1>Loading ..</h1>;
  }
  console.log(resInfo);
  const { name, costForTwo, cuisines, avgRating } =
    resInfo?.cards[0]?.card?.card?.info;

  const { cards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;

  console.log("itemList:", cards);
  const category = cards.filter(
    (c) =>
      c?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  console.log(category);

  return (
    <div className="menu border border-slate-200 rounded- sm">
      <h1 className="flex justify-center text-lg  m-2 px-2 font-extrabold">
        {name}
      </h1>
      <h3 className="flex justify-center m-2 px-2">
        {cuisines.join(", ")} - Cost for two : Rs. {costForTwo / 100}
      </h3>
      <h3 className="flex justify-center m-2 px-2"> {avgRating} </h3>

      {category.map((c, index) => (
        <RestaurantCategory
          data={c?.card?.card}
          showItems={index === showIndex ? true : false}
          setshowIndex={() => setshowIndex(index)}
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
