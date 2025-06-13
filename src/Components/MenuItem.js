import { useState } from "react";
import { addItems, IncrementItems, DecrementItems } from "../Stored/CartSlicer";
import {useDispatch, useSelector } from "react-redux"


export function MenuItem({items}){  


  // const [count , setCount] = useState(0);
   
  const dispatch = useDispatch();
  const items1 = useSelector(state=>state.cartslice.items);

  const element = items1.find(item=>item.id===items.id);
  const count = element? element.quantity:0;
  

    function handlAaddItems(){
      // setCount(1);
      dispatch(addItems(items))
    }

    function handleIncrementItems(){
      // setCount(count+1); 
      dispatch(IncrementItems(items))
    }

     function handleDecrementItems(){
      // setCount(count-1);
      dispatch(DecrementItems(items))
    }

    return(
        <>
      <div className="flex w-full justify-between mb-3 pb-2"> 
        <div className="w-[70%]">
            <p className="text-xl text-gray-700 font-semibold mb-1">{items?.name}</p>  
            <p className="text-balance font-semibold mb-2">{"₹"+ ('defaultPrice' in items? items?.defaultPrice/100 : items.price/100)}</p>  
            <span className="text-green-800 font-semibold">{items?.ratings?.aggregatedRating?.rating}</span>
            <span className="font-semibold mb-2">{"("+items?.ratings?.aggregatedRating?.ratingCountV2+")"}</span>
            <p>{items?.description}</p>
        </div>


        <div className="w-[20%] relative h-40">
            <img className="w-60 h-36 object-cover rounded-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+items.imageId}></img>
            {
              (count===0) ? ( <button className="absolute bottom-1 left-20  rounded-xl text-green-600 text-xl px-6 py-2 shadow-md border bg-white" onClick={()=> handlAaddItems()}>ADD</button>) : (

              <div className="  absolute bottom-1 left-20  rounded-xl flex gap-3 text-2xl text-green-600 
               px-6 py-2 shadow-md border bg-white"> 
                <button onClick={()=>handleDecrementItems()} >- 
                </button>
                <span>{count}</span>
                <button onClick={()=> handleIncrementItems()}>+</button>
              </div>
              )
            }
        </div>
        
      </div>
      <hr className="mb-5 mt-2"></hr>
      </>
    )
}   


    