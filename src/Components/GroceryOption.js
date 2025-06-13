import { GrocerGridCard } from "../Utils/GroceryData";
import { GroceryCard } from "./GroceryCard";

export function GroceryOption(){
    return(
            <div className="mt-20 w-[80%] container mx-auto ">
                <h1 className="text-2xl font-bold">Shop Groceries on Instamart</h1>
                 <div className="container mx-auto flex flex-nowrap overflow-x-auto mt-7 gap-3">
                   {
                       GrocerGridCard.map( (foodData) => <GroceryCard key={foodData.id} foodData={foodData}></GroceryCard> )
                   }
                 </div>
               </div>
    )
}