import { useState } from "react";
import { useParams } from "react-router"


useParams
export function SearchFood(){

    const {id} = useParams();

    // const arr = []

    const [food, setFood] = useState("")
    console.log(food)
    return(
        <div className="w-[80%] mx-auto mt-30">
            <input  className="w-full pl-10 py-4 text-2xl rounded-2xl bg-gray-200" placeholder="Search here" onChange={(e)=>setFood(e.target.value)}></input>
           

        </div>
    )

}