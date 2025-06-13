import { useSelector } from "react-redux"

export function Checkout(){

    const items = useSelector(state=>state.cartslice.items);
    return(
        <div>
         {
            items.map(value=> <div className="text-3xl font-semibold">{value.name}</div>)
         }
        </div>
    )
}