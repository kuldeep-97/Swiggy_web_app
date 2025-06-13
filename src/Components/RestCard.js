import { Link } from "react-router";


export function RestCard({ restInfo }) {



  return (

    <Link to={"/city/delhi/"+restInfo?.info?.id}>
    <div className="max-w-[280px] mb-1 transform duration-200 transition hover:scale-95">
      <img
        className="w-70 h-45 object-cover rounded-xl "
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/" 
           +restInfo.info.cloudinaryImageId
        }
      ></img>

      <div className="w-[95%]  mx-auto mt-1 ">
       <div className="font-bold text-xl w-[240px] truncate overflow-hidden whitespace-nowrap"> {restInfo?.info?.name} 
       </div>
        <div className=" flex items-center gap-2">
          <svg
          className="w-5 h-5 fill-green-600 inline-block"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  
>
  <path d="M12 .587l3.668 7.431L24 9.75l-6 5.848L19.335 24 12 20.201 4.665 24 6 15.598 0 9.75l8.332-1.732L12 .587z" />
</svg>

         <span className="text-lg">{restInfo.info.avgRating}
        </span>
       <span className="text-lg font-semibold ">{restInfo.info.sla.slaString} 
        </span></div>

        <div className="text-gray-700 text-base font-medium h-6.5 overflow-hidden ">{restInfo.info.cuisines.join(" ")}</div>

         <div className="text-gray-700 text-base font-medium h-7 overflow-hidden ">{restInfo.info.locality}</div>
      </div> 
    </div>
    </Link>
  );
}
