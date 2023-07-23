import React , { lazy ,Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error"
import { createBrowserRouter ,RouterProvider ,Outlet} from "react-router-dom";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
// import Grocery from "./components/Grocery";

// const Body = () => {
//   return (
//     <div className="body">
//       <div className="search">Search</div>
//       <div className="res-container">
//        {
//         resList.map(restaurant => <RestaurantCard key={restaurant.data.id} resData ={restaurant} />)
//        }
  
//       </div>
//     </div>
//   );
// };

const Grocery = lazy(() => import("./components/Grocery"));
const AppLayout = () => {
const [user , setUser] = useState({
  name: " Asutosh Sahoo",
  email: "support@namastedev.com",
});
  
  return (
    <UserContext.Provider value={{
      user : user,
      setUser: setUser,
      }}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element:<AppLayout/>,
    children:[
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path:"/contact",
        element:<Contact />,
      },
      {
        path:"/grocery",
        element:<Suspense fallback= {<Shimmer/>}> <Grocery /> </Suspense>,
      },
      {
        path: "/restaurants/:resId",
        element:<RestaurantMenu/>,
      },
    ],
    errorElement: <Error/>,   
  },
 
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);
root.render(<RouterProvider router={appRouter}/>);
