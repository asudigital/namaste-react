import { LOGO_URL } from "../utils/constants";
import { useState , useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContest from "../utils/UserContext";

const Header = () => {

  
  const [btnNameReact , setBtnNameReact] = useState("Login");
  // console.log("Header render");

  const onlineStatus = useOnlineStatus();
  const {user} = useContext(UserContest);

    return (
      <div className="flex justify-between bg-pink-100 shadow-lg  sm:bg-yellow-50 lg:bg-green-50">
        <div className="Logo-container">
          <img
            className="w-32"
            src= {LOGO_URL}
          />
        </div>
        <div className="flex items-center">
       
          <ul className="flex p-4 m-4">
            <li>{user.name}</li>
            <li className="px-4">
              Online status: {onlineStatus ? "✅" : "🔴"}
            </li>
            <li className="px-4">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4">
              <Link to="/about">About Us</Link>
              </li>
            <li className="px-4">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="px-4">
              <Link to="/grocery">Grocery</Link>
            </li>
            <li className="px-4">Cart</li>
            <button className="login" onClick={
              ()=>{
               btnNameReact ==="Login" ?setBtnNameReact("Logout") : setBtnNameReact("Login");
              // console.log(btnNameReact);
              }}>
                {btnNameReact}
                </button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;