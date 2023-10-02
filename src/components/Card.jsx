import resList from "../utils/mockData";
import CDN_URL from "../utils/constants";
const Card = (props) => {
  const { resData } = props;
  const { name, avgRating, cuisines, costForTwo, cloudinaryImageId } =
    resData?.info;
  return (
    <div className="res-card p-5 m-2 w-[250px] h-[500px] bg-slate-100 hover:bg-slate-200 justify-start wrap">
      <img className="rounded-lg" src={CDN_URL + cloudinaryImageId} />
      <div className="m-2 ">
        <h3 className=" py-2 text-md flex">{name}</h3>
        <h4 className="flex justify-start text-start">
          {" "}
          {cuisines.join(", ")}
        </h4>
        <h4 className="flex justify-start">{avgRating}</h4>
        <h4 className="flex justify-start">{costForTwo}</h4>
      </div>
    </div>
  );
};

export default Card;
