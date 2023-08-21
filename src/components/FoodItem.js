import { CDN_IMG_URL } from "../config";
import { BiRupee } from "react-icons/bi"
import { removeItem } from "../utils/cartSlice";
import { useDispatch , useSelector } from "react-redux";
// import { removeItem } from "../utils/cartSlice";

const CartItem = ({ item,
    name , 
    imageId,
    price,
    description,
}) => {
    
  const  cart  = useSelector((state)=>state.cart.items)
    const dispatch = useDispatch();

    const handelRemoveItem = () => {
      dispatch(removeItem(item.id));
    }
  return (
    <div className=" border p-2 m-6">
    <img
       className="w-44 " 
       src={CDN_IMG_URL + imageId} alt="cart-img"/>
       <p className="font-semibold p-2 w-44">{name}</p>
       <p className="p-2 text-gray-600 text-sm w-44">{description?.slice(0,100)+"..."}</p>
       <div>
         <p className="flex items-center p-2"><BiRupee/>{price/100}</p>
         <button
         className="p-1 bg-green-200 rounded"
         onClick={()=>handelRemoveItem(cart)}>Remove Item</button>
       </div>
    </div>
  )
}

export default CartItem
