import React, {useState, lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Body from "./Component/Body.js";
import Header from "./Component/Header.js"; 
import About from "./Component/About.js";
import Contact from "./Component/Contact.js"
import Error from "./Component/Error.js"
import RestaurantMenu from "./Component/RestaurantMenu.js";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import UserContext from "./UserContext.js";

//Redux
import {Provider} from "react-redux";
import appStore from "./utils/appStore.js";
import CartPage from "./Component/CartPage.js";


//Lazy Loading - Start
const Grocery = lazy(() => {

    import("./Component/Grocery.js");

});
//Lazy Loading - End

//console.log(<UserContext.Provider value={{loggedIn : "Shivam.K"}}><div>demo</div></UserContext.Provider>);
//Main Component
const AppLayout = () => {

    console.log("AppLayout rendering");
    const [userName, setUserName] = useState("Admin");

    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedIn : userName, setFn: setUserName}}>
        <div className="container">
            <Header />
            <Outlet />
        </div>
        </UserContext.Provider>
        </Provider>
    );
}
//Main Component

//creating routing configuration
const appRouter = createBrowserRouter([
    
    {
        path: "/",
        element : <AppLayout/>,
        errorElement : <Error />,
        children : [

            {
                path: "/",
                element : <Body />
            },
            {
                path: "/about",
                element : <About />
            },
            {
                path: "/contact",
                element : <Contact />
            },
            {
                path : "/restaurants/:resId",
                element : <RestaurantMenu />
            },
            {
                path : "/grocery",
                element : <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
            },
            {
                path : "/cart",
                element : <CartPage />
            }
        ]
    }
    
]);

// const obj = <About />;
// console.log(obj.type.name);

const rootElement = ReactDOM.createRoot(document.getElementById("root"));

rootElement.render(<RouterProvider router={appRouter} />);


/*
    Header
    -Logo
    -Nav Items

    Body
    -Search
    -Card Container
        -Card Item
    
    Footer
    -Copyright
    -Links
    -Contact Info
*/
