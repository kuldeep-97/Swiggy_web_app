import { useEffect, useState } from "react"
import { RestCard } from "./RestCard"
import { Shimmer } from "./Shimmer"

export function Restaurant(){

    const [RestData, setRestData] = useState([])

    useEffect(()=>{
        
        async function fetchData() {
        
            // Online Proxy server 
            
            const proxyServer = "https://cors-anywhere.herokuapp.com/"
            const swiggyAPI = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.71700&lng=75.83370&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

       const response =  await fetch(proxyServer+swiggyAPI) 

    //**** */ Local Procxy server 
        //   const response = await fetch("http://localhost:5000/api/restaurants");

       const data =  await response.json()

     setRestData(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);

        }

       fetchData();  
    },[])

   
    // console.log(RestData)

    // shimmer effect
    if(RestData.length == 0){
       return <Shimmer></Shimmer>
    }

    return(
        <div className="flex flex-wrap w-[83%] mx-auto  mt-20 gap-5">
            {
                RestData.map((restInfo)=><RestCard key={restInfo.info.id} restInfo={restInfo}></RestCard>)
                
            }
        </div>
       
    )
 
  
}
  


