import { useState, useEffect } from "react";
import { MENU_API } from "./constants";
const useRestaurantMenu = (resId) => {
    const [resInfo, setresInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        console.log("I am here");

        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setresInfo(json.data);
    }
    return resInfo;
};
export default useRestaurantMenu;