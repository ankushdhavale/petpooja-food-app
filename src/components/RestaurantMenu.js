import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CDN_IMG_URL } from "../config";
import { BiRupee } from "react-icons/bi"
import Shimmer from "./Shimmer"

const RestaurantMenu = () => {
    const {resId} = useParams();
    const[restaurant, setRestaurant] = useState([]);
    const[restaurantMenu, setRestauranrMenu] = useState([])


    useEffect(() => {
        getRestaurantInfo();
    },[]);

    async function getRestaurantInfo() {
        const data = await fetch(
            //`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.385044&lng=78.486671&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
            `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.7272349&lng=83.3021004&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`)
        
         const json = await data.json();
         const restaurantInfo = json?.data?.cards[0]?.card?.card?.info;
         setRestaurant(restaurantInfo)
         console.log(restaurantInfo);
         const allCardArray = json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        //  console.log(allCardArray);     
         const allItemArray = allCardArray?.map((itemArray) => itemArray?.card?.card?.itemCards?.map((item) => item?.card?.info))
         const itemsArray = allItemArray.map((i)=>i?.map((j)=>j))
        //  console.log(itemsArray);
         setRestauranrMenu(itemsArray.flat());
         
    };


  return (!restaurant) ? (<Shimmer/>) : (
    <div className="">
        <div className="flex mx-8 gap-4 m-20">
            <div>
              <img
              className="w-74 rounded-lg" 
              src={CDN_IMG_URL + restaurant?.cloudinaryImageId} alt="restaurant-img"/>
            </div>
            <div className="`">
                <p className=" text-xs p-2">Restaurant id : {restaurant.id}</p>
                <p className=" text-5xl font-semibold p-2">{restaurant?.name}</p>
                <h4 className=" text-xl p-2">{restaurant?.cuisines?.join(" , ") }</h4>
                <h4 className=" text-xl p-2">{restaurant?.locality}</h4>
                <p className=" text-xl  p-2">{restaurant?.avgRating + "⭐" + " | Total Ratings: " + restaurant?.totalRatingsString}</p>
                <h4 className=" text-xl p-2">{restaurant?.costForTwoMessage}</h4>
            </div>
        </div>
        <div className="flex">
          <div>
            {
                restaurantMenu.map((item , i)=>{
                    return item ? (<div key={i.item}>
                        <div className="w-full flex items-center px-48 py-8 gap-40 ">
                            <div className="w-[615px]">
                                <p className=" font-semibold">{item?.name}</p>
                                <p className="flex p-2 items-center"><BiRupee/>{item?.defaultPrice ? item?.defaultPrice/100 : item?.price/100}</p>
                                <p className=" font-light">{item?.description ? item?.description : item?.category}</p>
                            </div>
                            <div>
                                <img 
                                className="w-40 rounded "
                                src={ item?.imageId ? CDN_IMG_URL + item?.imageId : CDN_IMG_URL + restaurant?.cloudinaryImageId } alt="restaurant-img"/>
                            </div>
                        </div>
                        </div>) :(null)
                })
            }
          </div>
            
        </div>
    </div>
  )
}

export default RestaurantMenu;
