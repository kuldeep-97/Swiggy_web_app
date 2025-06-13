// import { ItemCards } from "./ItemCards"
import { useState } from "react";
import { MenuItem } from "./MenuItem";

export function MenuCard({ menuItems,foodSelected }) {

  const [isOpen, setIsOpen] = useState(true);

  // Categories case handle
  if ("categories" in menuItems) {
    return (
      <div className="w-full">
        <p className="text-xl font-bold">{menuItems.title}</p>
        <div>
          {menuItems?.categories?.map((items) => (
            <MenuCard key={items?.title} menuItems={items} foodSelected={foodSelected}></MenuCard>
          ))}
        </div>
      </div>
    );
  }


  if (!isOpen) {
    return (
      <div className="w-full">
        <div className="flex justify-between w-full">
          <p className="text-2xl font-bold mb-4">{menuItems.title}</p>
          <button
            className="text-3xl font-bold mr-20"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "^" : "⌄"}
          </button>
        </div>
        <div className="h-4 bg-gray-200 mt-2 mb-2"></div>
      </div>
    );
  }


  if(foodSelected==='veg'){
    return(
         <div className="w-full">
        <div className="flex justify-between w-full">
          <p className="text-2xl font-bold mb-4">{menuItems.title}</p>
          <button
            className="text-2xl font-semibold mr-20"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "∧" : "∨"}
          </button>
        </div>

        <div>
          {menuItems?.itemCards?.filter((food)=> 'isVeg' in food.card.info).map((items) =>
            <MenuItem
              key={items?.card?.info?.id}
              items={items?.card?.info}
            ></MenuItem>
          )}
        </div>
        <div className="h-3 bg-gray-300 "></div>
      </div>
    )
  }

  if(foodSelected==='nonveg'){
      return(
         <div className="w-full">
        <div className="flex justify-between w-full">
          <p className="text-2xl font-bold mb-4">{menuItems.title}</p>
          <button
            className="text-2xl font-semibold mr-20"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "∧" : "∨"}
          </button>
        </div>

        <div>
          {menuItems?.itemCards?.filter((food)=> !('isVeg' in food.card.info))  .map((items) =>
            <MenuItem
              key={items?.card?.info?.id}
              items={items?.card?.info}
            ></MenuItem>
          )}
        </div>
        <div className="h-4 bg-gray-400 "></div>
      </div>
    )
  }

  return (
   
      <div className="w-full">
        <div className="flex justify-between w-full">
          <p className="text-2xl font-bold mb-4">{menuItems.title}</p>
          <button
            className="text-2xl font-semibold mr-20"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "∧" : "∨"}
          </button>
        </div>

        <div>
          {menuItems?.itemCards?.map((items) =>
            <MenuItem
              key={items?.card?.info?.id}
              items={items?.card?.info}
            ></MenuItem>
          )}
        </div>
        <div className="h-3 mb-5 bg-gray-300 "></div>
      </div>
  );
}



// Har Eroor or Problem ka solution hai : ? ye  bhai iss erro ko solve krne me 1.5 houes lag laye bus sirf ek chota ? mark dlne me

// Error ? : Decode -> kuch conditon ko handle krna thai like itemCard mil nhi rha tha vo kisi cetegory vale ke under prsent tha ish liye find nhi ho rha tha ok
// -> Real data(apis) ke sath khelna meuth ka khel hai bhai
// Or kese iss case ko handle krenge :

// Propers sahi se pass krna bhi jrui hai

// Note : Live Apis pe work krne ke liye chorm best hai

// RestInfo == ItemCard



