import { FoodCard } from "./FoodCard";
import { imageGridCards } from "../Utils/FoodData";

export function FoodOption(){
    return(
        <>
          <div className="w-[80%] container mx-auto flex flex-wrap gap-5">
            {
                imageGridCards.map( (foodData) => <FoodCard key={foodData.id} foodData={foodData}></FoodCard> )
            }
          </div>
        </>
    )
}