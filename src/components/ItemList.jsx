import CDN_URL from "../utils/constants";

const ItemList = ({ items }) => {
  console.log("items", items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.name}
          className=" flex border-b  border-slate-300 m-2 p-2 text-left justify-between"
        >
          <div className="w-10/12">
            <div className="py-2">
              <span className="text-lg">{item.card.info.name} </span>
              <span>
                ₹{" "}
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
              <p className="text-md ">{item.card.info.description}</p>
            </div>
          </div>
          <div className="w-2/12 p-4">
            <img
              className="w-full rounded-md shadow-md"
              src={CDN_URL + item.card.info.imageId}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
