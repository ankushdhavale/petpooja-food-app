import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../components/FoodItem'
import { clearCart } from '../utils/cartSlice'

const Cart = () => {
  const cartItem = useSelector(state => state.cart.items)

  const dispatch = useDispatch();

  const handelClearCart = () => {
    dispatch(clearCart())
  } 
  return (
    <>
    {
      cartItem?.length > 0 ? (
        <div>
              <button className="p-1 m-4 bg-blue-300 rounded"
                        onClick={()=>handelClearCart()}>Clear Cart  
              </button>
        <div className="flex flex-wrap mx-12">
         { 
           cartItem.map((item) => {
           return <CartItem key={item.id} {...item} item={item} />
           })
         }
        </div>
        </div>
      ):(<div>
           Cart is empty Please Add Card...
      </div>)

    }
    </>
  )
}

export default Cart
