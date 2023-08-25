import { NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/img/petpooja-pos.png";
import { useSelector } from "react-redux";
import { BsCartCheck } from "react-icons/bs"


const loggedInUser = () =>{
  return false;
}

export const Title = () => {
    return(
      <div className="">
        <NavLink to = "/">
            <img  
            className="w-24"
            alt="logo"
            src={Logo}/>
        </NavLink>
      </div>
    )
  }
  const Header = () =>{

    const [ red , setRed] = useState(false);
    const [ isLoggedInUser, setIsLoggedInUser ] = useState(false);

    const  cartItems  = useSelector((state)=>state?.cart?.items);
    // console.log(cartItems);
 
   

    return(
      <div className="border border-gray-500 shadow-sm shadow-blue-400">
      <div className="flex m-2 justify-between items-center ">
        <Title/>
        <div>
          <ul className="flex gap-5">
            <NavLink to = "/"><li
            className=" hover:bg-orange-400 p-1 px-2 rounded-lg hover:text-white"
            >Home</li></NavLink>
            <NavLink to="/About"><li
            className=" hover:bg-orange-400 p-1 px-2 rounded-lg hover:text-white"
            >About</li></NavLink>
            <NavLink to="/Contact"><li
            className=" hover:bg-orange-400 p-1 px-2 rounded-lg hover:text-white"
            >Contact</li></NavLink>
            <NavLink to="/instamart"><li
             className=" hover:bg-orange-400 p-1 px-2 rounded-lg hover:text-white"
             >InstaMart</li></NavLink>
            <NavLink to="/Cart"
                             ><li className="flex items-center space-x-1 hover:bg-orange-400 p-1 px-2 rounded-lg hover:text-white"><BsCartCheck/>
                  <span
                  className="bg-blue-100 rounded-full w-4 items-center"
                  > {cartItems?.length}</span></li>
              </NavLink>
          </ul>
        </div>
        <div className="">
          {isLoggedInUser ? (
            <button 
            className="hover:bg-orange-400 p-1 px-2 rounded-lg hover:text-white"
            onClick={() => setIsLoggedInUser(false)}
            >LogOut</button>
            ) : (
            <button  
            className="hover:bg-orange-400 p-1 px-2 rounded-lg hover:text-white"
            onClick={() => setIsLoggedInUser(true)}
            >Login</button>)
          }
          
          
        </div>                                                                                              
      </div>
      </div>
    )
  }

  export default Header;