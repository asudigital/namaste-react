
import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
const RestaurantCard = (props) => { 
    const { resData } = props;
// Destructuring
//optionaChaining
const {cloudinaryImageId,name,cuisines,avgRating,costForTwo, deliveryTime } = resData?.data;
const {user} = useContext(UserContext);
  return (
    <div className=" m-4 p-4 w-[250px]  rounded-lg bg-gray-200 hover:bg-gray-400" 
    //  style={{backgroundColor: "#f0f0f0" }}
    >
      <img className= "rounded-lg" alt="res-logo" 
      src={CDN_URL + cloudinaryImageId}>
      </img>
      <h3 className="font-bold py-4  text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
      <h4>{resData.data.deliveryTime} minutes</h4>
      <h5 className="font-bold">{user.name}- {user.email}</h5>
    </div>
  );
};

export default RestaurantCard;