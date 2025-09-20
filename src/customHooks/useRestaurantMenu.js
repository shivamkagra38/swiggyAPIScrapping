import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {

    const[resInfo, setResInfo] = useState(null);

    useEffect(()=>{

        fetchData();

    },[]);

    const fetchData = async () => {

        const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.7015368&lng=76.8217473&restaurantId=${resId}`);
        const data = await response.json();

        setResInfo(data);

    }
    return resInfo;
}

export default useRestaurantMenu;