import React, { useEffect, useState } from 'react'
import ResturantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import {FETCH_RESTAURANT_URL } from '../config';
import { filterData } from '../utils/helper';
import useOnline from '../utils/useOnline';




const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([])
  const [filterdRestaurants , setFilterdRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const [user , setUser] = useState({
    name:"hi dev ",
    age:20,
    }) 


  async function getRestaurants(){  
         const res = await fetch(FETCH_RESTAURANT_URL);
         const json = await res.json();
        //  console.log(json);
         setAllRestaurants(json?.data?.cards[2].card?.card?.gridElements?.infoWithStyle?.restaurants);
         setFilterdRestaurants(json?.data?.cards[2].card?.card?.gridElements?.infoWithStyle?.restaurants);

  }

    useEffect(() =>{
      getRestaurants();
    } , [])
    
    const isOnline = useOnline();
    if(!isOnline){
      return (
        <h1> Offline, Check your internet connection ?....</h1>
      )
    }
    

  return (
    <>
      <div className=" m-5 w-72 border space-x-4 rounded-sm ">
        <input 
        className=" list-none py-2 outline-none p-4"
        type="text"
        placeholder="Search"
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value) 
        }}
        />
        <button 
        className="hover:font-semibold hover:text-gray-500"
        onClick={() => {
        const data = filterData(searchInput,allRestaurants);
        setFilterdRestaurants(data);
       }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap gap-10 mx-20 w-70 h-130 " >
        {filterdRestaurants?.length == 0 && searchInput.length != 0 ? (
          <span>No result found.</span>
        ) : filterdRestaurants?.length == 0 && searchInput.length == 0 ? (
          <Shimmer />
        ) : (
          filterdRestaurants?.map((restaurant) => {
            return(
            <Link to = {"/restaurant/"+restaurant.info?.id} >
              <ResturantCard {...restaurant.data} {...restaurant.info} key={restaurant.info?.id} user={user}/>
            </Link>)
          })
        )
        }
        
      </div>
    </>
  )
}

export default Body;
