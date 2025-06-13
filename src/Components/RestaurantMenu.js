
import { useEffect , useState } from "react";
import { Link, useParams } from "react-router";
import { MenuCard } from "./MenuCard";

export function RestaurantMenu(){
   let {id} =  useParams();
   // console.log(id);


const [RestMenuData , setRestMenuData] = useState([]);

 const [selected, setSelected] = useState(null)

  useEffect(()=> {

       async function fetchData() {
        
            // Online Proxy server 
            
            const proxyServer = "https://cors-anywhere.herokuapp.com/"
            const swiggyAPI = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.71700&lng=75.83370&restaurantId=${id}`

       const response =  await fetch(proxyServer+swiggyAPI) 

    //**** */ Local Procxy server 
         //  const response = await fetch("http://localhost:5000/api/restaurants");

       const data =  await response.json()

       const tempData = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

       const filterData = tempData.filter((items)=> 'title' in items?.card?.card)

     setRestMenuData(filterData);
   
   }

       fetchData();  
  },[])

//   console.log(RestMenuData)

   return(
   //  <>
   //  <h1>Hello coder armys</h1>
   //  <h2>{id}</h2>
   //  </>


   <div>

      {/* Serching functionaltiy */}
      <div className="w-[83%] mx-auto mt-20 mb-20">
         <Link to={`/city/delhi/${id}/search`}>
         <p className="w-full  text-center py-2 rounded-3xl bg-gray-200 text-2xl">Search for Dishes</p>
         </Link> 
      </div>

      {/* veg nonveg filter functionality  */}
      <div className="w-[83%] mx-auto mt-20 mb-20">
         <button className={` text-2xl py-2 px-8 mr-4 border rounded-2xl ${selected==='veg'? 'bg-green-600': 'bg-gray-300'}`} 
        onClick={()=>setSelected(selected==='veg'?null:'veg')}  >Veg</button>
         <button className={`text-2xl py-2 px-4  border rounded-2xl ${selected==='nonveg'? 'bg-red-600': 'bg-gray-300'}`} 
        onClick={()=>setSelected(selected==='nonveg'?null:'nonveg')} >NonVeg</button>
      </div>

   <div className="w-[83%] mx-auto mt-20">
      {
         RestMenuData.map((menuItems)=><MenuCard key={menuItems?.card?.card?.title} menuItems={menuItems?.card?.card} foodSelected={selected}></MenuCard>)
      }
   </div>

   </div>

   )

}