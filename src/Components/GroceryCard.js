
export function GroceryCard({foodData}){
    return(
       <div className="flex flex-none ">
        <a href={foodData?.action?.link}>
        <img className="w-40 h-50  object-cover" src={`https://media-assets.swiggy.com/swiggy/image/upload/${foodData?.imageId}`}></img>
          <h2 className="mt-2 text-center break-words font-bold">{foodData?.action?.text}</h2>
        </a> 
       </div>
    )
}      

