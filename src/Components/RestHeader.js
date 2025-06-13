import { useSelector } from "react-redux"
import { Link } from "react-router";



export function RestHeader(){
 
        const counter = useSelector(state=> state.cartslice.count);
     

    return(
     <div className=" w-[100%] shadow-2xl bg-gray-100 text-4xl flex justify-between ">
        <div>
            <p className="text-orange-600 pl-30 font-bold py-6 px-4">Swiggy</p>
        </div>

        <div className="flex gap-13 text-xl font-semibold py-7 ml-50">
            <p>Swiggy Corporate</p>
            <p>🔖 Offers</p>
            <p>🙋 Help</p>
            <p>🔐 Sign In</p>
        </div>
        
        <div className="flex">
            <Link to="/Checkout">
            <p className="  text-balance font-semibold py-5 px-25">🛒 Cart {`(${counter})`}</p> </Link>
        </div>
     </div>
    )
}




// it wast my time in 2 hovers that miskat are 
    //  const counter = useSelector(state=> state.cartslice.count);

    //  // solution
    //  const counter = useSelector(state=> state.cartslice.items);