import { Link } from "react-router"
// first div : swiggy ka logo

export function Header(){
    return(
      <header className="bg-[#ff5200] font-serif">
        <div className=" flex justify-between container mx-auto py-8">
            <img className="w-40 h-12"  src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"></img>

            <div className=" text-white text-base font-bold flex gap-15 items-center ">
                <a target="blank" href="https://www.swiggy.com/corporate/">Swiggy Corporate</a>
                <a target="blank" href="https://partner.swiggy.com/login#/swiggy">Partner with Us</a>
                <a className="border border-white py-3 px-4 rounded-2xl" target="blank" href="https://www.swiggy.com/corporate/">Get The App</a>
                <a className="border border-black bg-black rounded-2xl py-3 px-4" target="blank" href="https://www.swiggy.com/corporate/">Sign in</a>
            </div>
        </div>

        <div className="pt-16 pb-8 relative">
            <img className="w-60 h-110 absolute top-0 left-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"></img>
            <img className="w-60 h-110 absolute top-0 right-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"></img>
            <div className="max-w-[62%]  text-5xl text-white font-bold container mx-auto text-center">
                Order food and groceries. Discover best restaurants. Swiggy it!
            </div>
            <div className="max-w-[70%] contaier mx-auto flex gap-6 mt-5" >
               <input className="bg-white w-[35%] text-xl px-4 py-3 rounded-2xl ml-7" placeholder="Delhi, India"></input>
               <input className="bg-white w-[45%] text-xl px-4 py-3 rounded-2xl" placeholder="Search for restaurant and items for more"></input>
            </div>
        </div>

        <div className="max-w-[80%] container mx-auto flex mt-5 ">
            {/* <a href="https://www.swiggy.com/restaurants">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"></img>
            </a> */}

            <Link to="/restaurant">
             <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"></img>
            </Link>



                   <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png"></img>
            </a>
                   <a href="https://www.swiggy.com/restaurants">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"></img>
            </a>
        </div>
      </header>
    )
} 