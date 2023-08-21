import {CDN_IMG_URL} from "../config"

const ResturantCard = ({
    name,
    costForTwo,
    cuisines,
    cloudinaryImageId,
    avgRating,
}) => {
    return(
      <div className="p-5 hover:border scroll-smooth ">
              <img
              className="w-56" 
              src={CDN_IMG_URL + cloudinaryImageId}/>
              <h2
              className="py-1 text-start  text-md font-semibold w-44"
              >{name}</h2>
              <h4
              className="py-1 text-xs text-gray-500 w-44 text-start"
              >{cuisines.toString().slice(0, 20) + "..."}</h4>
              <div className="flex justify-between">
              <h4
              className="py-1 text-sm"
              >{avgRating} ⭐</h4>
              <h3
              className="py-1 text-sm"
              >{costForTwo}</h3>
              </div>
             
          </div>
  );
  }

  export default ResturantCard;