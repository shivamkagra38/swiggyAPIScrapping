import {useSelector } from "react-redux";
import {clear} from "../utils/cartSlice";

import { useDispatch } from "react-redux";

const CartPage = () => {

  const info = useSelector((store) => {return store.cart.items});

  const dsp = useDispatch();
  const handleClearCart = () => {

    dsp(clear());

  }

  return (
    <div  className="cart-container">
        <div className="header text-center py-16">
            Cart<br></br>
            {info.length === 0 ? <p className="font-bold">Cart is empty</p> : <button className="m-2 p-2 bg-red-500 text-white rounded-2xl" onClick={handleClearCart}>Clear Cart</button> }
        </div>
        <div className="text-left w-6/12 mx-auto">
                {
                    info.map((i,key)=>{

                        return (

                            <div data-testid="cart-items" className="px-4 py-2 flex justify-between items-center border-b-2 border-gray-300" key={key}>

                                <div>
                                    <span>{i.card.info.name}</span>
                                    <span> -₹{i.card.info.price/100}</span>
                                    <p className="text-gray-400 text-sm">{i.card.info.description}</p>
                                </div>

                                <div>
                                    <img src={"https://media-assets.swiggy.com/swiggy/image/upload/"+i.card.info.imageId} className="w-[200px] h-auto"></img>
                                </div>                                
                               
                            </div>

                        )

                    })
                }
            </div>
    </div>
  )
}

export default CartPage;
