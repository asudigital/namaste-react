import RestaurantCard from "./RestaurantCard";
import { useState, useEffect , useContext } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
// import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import useBody from "../utils/useBody";

const Body = () => {
  
  //Local State variable - Super powerful variable
  const [listOfRestaurants , setListOfRestaurant]  = useState([]);

  const[filteredRestaurant,setFilteredRestaurant]=useState([]);
  const [searchText , setSearchtext] = useState("");
  console.log("body rendered");

// const user = useContext(UserContext);
//     console.log(user.user.name);

const {user, setUser} = useContext(UserContext);


  useEffect(() => {
   fetchData();
  } , []);

  const fetchData = async() => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9671852&lng=77.6385779&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();

    console.log(json); 
    //optional chaining
    // old API
    // setListOfRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    // setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setListOfRestaurant(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };


  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false) return <h1>looks like you are offline !! Please check your internet connection</h1>
  // //conditional rendering
  // if(listOfRestaurants.length === 0){
  //   return <Shimmer />;
  // }

    return listOfRestaurants.length ===0 ? <Shimmer/> :(
      <div className="body">
        <div className="filter flex">

         <div className="search m-4 p-4">
          <input type="text" className="border border-solid border-black" value = {searchText} onChange={(e)=>{
            setSearchtext(e.target.value);
          }}/>
          <button className="px-4 py-2 bg-green-100 m-4 rounded-lg " 
          onClick={()=>{
            // Filter the restaurant cards and update the UI
            // search text
            console.log(searchText);
           const filteredRestaurant= listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));

           setFilteredRestaurant(filteredRestaurant);
          }}>Search</button>
          <input value={user.name} onChange={
            e => setUser({
              ...user,
              name:e.target.value,             
            })
          }></input>

          <input value={user.email} onChange={
            e => setUser({
              ...user,
              email:e.target.value,             
            })
          } ></input>
         </div>
        <div className="search m-4 p-4 flex items-center"> 
           
          <button 
            className="px-4 py-2 bg-gray-100 rounded-lg" onClick={() => {
              setListOfRestaurant()
                //filter logic here
                const filteredList =listOfRestaurants.filter( 
                  (res) => res.info.avgRating > 4
                  );
                  // setListOfRestaurant(filteredList);
                  setFilteredRestaurant(filteredList);
            }}
            >
              Top Rated Restaurant
              </button>
              </div>
        </div>
        <div className="flex flex-wrap">
         {
          filteredRestaurant.map(restaurant => <Link key={restaurant?.info.id} to={"/restaurants/" + restaurant.info.id}><RestaurantCard  resData ={restaurant} /></Link>)
         }

{/* old API */}
{/* key={restaurant?.data.id}
            to={"/restaurants/" + restaurant?.data.id} */}
    
        </div>
      </div>
    );
  };
  export default Body;