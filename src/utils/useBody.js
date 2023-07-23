import {useState , useEffect} from "react";

const useBody = () => {

    const [listOfRestaurants , setListOfRestaurant]  = useState([]);
    

    useEffect(() => {
        fetchData();
       } , []);
}

const fetchData = async() => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9671852&lng=77.6385779&page_type=DESKTOP_WEB_LISTING");
    console.log("useBody");
    const json = await data.json();

    // console.log(json); 
    //optional chaining
    setListOfRestaurant(json?.data?.cards[2]?.data?.data?.cards);
   
    return listOfRestaurants ;
  };

export default useBody;