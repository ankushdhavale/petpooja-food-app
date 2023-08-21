import { NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/img/petpooja-pos.png";
import { useSelector } from "react-redux";


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
            <NavLink to = "/"><li>Home</li></NavLink>
            <NavLink to="/About"><li>About</li></NavLink>
            <NavLink to="/Contact"><li>Contact</li></NavLink>
            <NavLink to="/instamart"><li>InstaMart</li></NavLink>
            <NavLink to="/Cart"
                 ><li>Cart
                  <span
                  className="bg-blue-100 rounded-full"
                  > {cartItems?.length}</span></li>
              </NavLink>
          </ul>
        </div>
        <div className="">
          {isLoggedInUser ? (
            <button 
            onClick={() => setIsLoggedInUser(false)}
            >LogOut</button>
            ) : (
            <button  
            onClick={() => setIsLoggedInUser(true)}
            >Login</button>)
          }
          
          
        </div>                                                                                              
      </div>
      </div>
    )
  }

  export default Header;