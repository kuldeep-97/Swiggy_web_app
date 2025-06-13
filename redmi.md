
# Server Side redring :
 * ) Server side pe pure data ko load kr to then fir html doc me sara data dal kr send kr do uske under sab kuch prsent hoga  and alag se bad me fecth opration krna nhi pdta

 * ) Server sid me data render hota hai   


 D21-Swiggy_MajorProject

 

# D22- Mejor Project 

 <!-- Apis -->
 * )  Restorent api
 https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.71700&lng=75.83370&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING



 * ) RestaurantMenu api like Pizza hat2
 https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.71700&lng=75.83370&restaurantId=581971&catalog_qa=undefined&submitAction=ENTER


 <!-- Origin or Cros Origin server and clind -->
 * ) CORS issue : Ager Clint or server diff diff origin ke hai to by Defult vo data ko Browser me show nhi hone dega jo bhi fetch krke louge

 Ager allow krna hai to 
 Server ke Heder section me data metion hona chiye ki yha pe xros origin allow hai 

* Origin : Ek hi Domain ka hona

 # Swiggy to Swiggy Server 
 -> Swiggy request to server Fetch api vali than server ne complit kr ke swiggy ko dediya to browsr ne koi issue creat nhi kra ok
 -> Browser cheek origin same or not 
 -> Origin same to no any issu kyu ki swiggy hi swiggy vale ko request mar rha hai or swiggy hi vo data fatch kr rha hai ye byDefult hota hai 

 * ) Swiggy server not sport Xros Origin ok

 # SwiggyClon to Swiggy Server
 -> Swiggyclon req to swiggy server than swiggy server also response back to APIs  but not resive swiggy clon when resion are Browser cheek to both of Origin  in this case origin are same we have to  acept Apis but not same tham we have not resive Apis ok

 -> Origin not same diff diff hai to fir by difault Browser uss request ko fulfil nhi hone deta 

 -> jo response aa rha hai uske under ek Heder hota  hai wha sri info rhti hai Origin allow krna hai ya nhi

 * Heder Component : All Permision hoti hia kis alow kr hai kis ko nhi sab 

 * ) Browse des not allow Xros Origin Until unles 
 jo bhi response aaya ho uske Heder section me mention hona chaiye ki xros origin allow hai verna nhi krega any how condition 


# Third Party server : 

* ) This APIs enables corss-origin requests to anywhere.

proxyUrl = "https://cors-anywhere.herokuapp.com/"



# D23-MejorProject 
* ) Apis Handling : large amount of apis
and i also handle Realwold swiggy apis ok 
and Realwold project hai ye 


# D24 MejorProject
* ) serching ke uper kuch restriction lagai hai swiggy ne

# D25 MejorProject

* ) Upcoming feachers comming soon 

* ) State variable issu : state variable apne value luss kr dete hai jab vo diffrent rout pe jate hai 