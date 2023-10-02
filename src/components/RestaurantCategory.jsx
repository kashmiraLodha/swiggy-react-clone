import ItemList from "./ItemList";
const RestaurantCategory = ({ data, showItems, setshowIndex }) => {
  const handleClick = () => {
    setshowIndex();
  };

  return (
    <div className="w-10/12 my-4 mx-auto p-4 bg-slate-100 shadow-lg rounded-md">
      <div
        className=" flex justify-between cursor-pointer "
        onClick={handleClick}
      >
        <span className="font-extrabold">
          {data.title} ({data.itemCards.length})
        </span>
        <span>⬇</span>
      </div>
      <div>{showItems && <ItemList items={data.itemCards} />}</div>
    </div>
  );
};
export default RestaurantCategory;
