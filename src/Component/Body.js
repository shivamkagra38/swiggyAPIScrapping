import React, { useContext } from 'react'
import RestaurantCard, {isPromoted} from "./RestaurantCard.js";
import { resList } from '../utils/constants.js';
import { useState, useEffect } from 'react';
import ShimmerUI from './ShimmerUI.js';
import { Link } from 'react-router-dom';
import useOnline from "../customHooks/useOnline";
import UserContext from '../UserContext.js';
import Header from './Header.js';

const Body = () => {

    console.log("Body Rendered");
    const[listOfRestaurants, setList]   = useState([]);
    const[filterResto, setFilterResto]  = useState([]);
    const[searchText, setSearchText]    = useState("");
    const onlineStatus                  = useOnline();
    const data = useContext(UserContext);
    const RestaurantCardPromoted = isPromoted(RestaurantCard);

    const[state, setState] = useState(0);
    //[
      //   {resName: "Absolute Barbeques", cusine:"grills",img:"https://www.shoutlo.com/ass  ets/images/merchant_images/merchant-150355-61b713831e4b5.jpg",star:5}
        //,{resName: "BBQ Nation", cusine:"grills",img:"https://www.shoutlo.com/assets/images/merchant_images/merchant-150355-61b713831e4b5.jpg",star:1}
        //]

        useEffect(()=>{

            fetchData();
            
        },[]);

        const fetchData = async () => {

            //const fetchCall = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7015368&lng=76.8217473&collection=83669&tags=layout_CCS_Rolls&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
            //https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.73390&lng=76.78890&collection=83633&tags=layout_CCS_NorthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null
           const fetchCall = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.73390&lng=76.78890&collection=83633&tags=layout_CCS_NorthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
            const data = await fetchCall.json();
            let arr = data.data.cards.splice(3);

           let resArray = arr.map((restaurant)=>{

            return { 

            resName : restaurant.card.card.info.name,
            cusine : "Food",
            img : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+restaurant.card.card.info.cloudinaryImageId,
            star : restaurant.card.card.info.avgRating,
            id :  restaurant.card.card.info.id,
            promoted : restaurant.card.card.info.promoted

                }
 
           });
           //console.log(resArray);
            setList(resArray);
            setFilterResto(resArray);
        }
        
        //Conditional Rendering
        if(listOfRestaurants.length == 0)
        {
            return <ShimmerUI />;
        }
        
        if(onlineStatus === false)
            {
                return <h1>🔴Offline, Please check your internet connection!!</h1>;
            }

    return (
        <div className="body">

            <div className="search-container flex justify-center mt-5 p-5">
            <div className="search-bar">
                <input type="text" id="search-bar" className="search-bar-text p-0.5 border-1 rounded-lg" value={searchText} onChange={(e)=>{

                    setSearchText(e.target.value);

                }}></input>
                <button className="search-bar-button bg-pink-200 px-4 py-0.5 ml-2 rounded-lg" onClick={()=>{

                //Filter The Restaurant card and update UI
                console.log(searchText);

                setFilterResto( listOfRestaurants.filter((resto)=>{
                    return resto.resName.toLowerCase().includes(searchText.toLowerCase());
                }) );


                }}>Search</button>
            </div>

            <div className="filter">
                <button className="filter-btn  bg-gray-100 px-4 py-0.5 ml-2 rounded-lg" onClick={()=>{
                    setList(listOfRestaurants.filter((data)=>{ return data.star > 4.3; }));
                }}>Top Rated Restaurants</button>
            </div>

            <div className="ml-2.5">
                <input placeholder="Enter user Name" type="text" className="set-name p-0.5 border-1 rounded-lg" onChange={(e)=>{
                    //console.log(e.target.value);
                    data.setFn(e.target.value);
                }}></input>
            </div>
            
            <div>
                <button onClick={()=>{setState(state+1)}}>++</button>
                <span>{state}</span>
            </div>

            </div>

            <div className="res-container flex flex-wrap">
                {
                    filterResto.map((restaurant, index)=>{

                        return restaurant.promoted == undefined ? <Link to={"/restaurants/"+restaurant.id} key={restaurant.id}><RestaurantCard resData={restaurant} /></Link>
                        :<Link to={"/restaurants/"+restaurant.id} key={restaurant.id}><RestaurantCardPromoted resData={restaurant} /></Link>

                    })
                }
            </div>
            <Header/>
        </div>
    );
}

export default Body;

//  {
//                     filterResto.map((restaurant,index)=>{
//                         console.log(restaurant);  

//                        // return restaurant.promoted === true ? (<RestaurantCardPromoted resData={restaurant} />) : (<Link key={index} to={"restaurants/"+restaurant.id}><RestaurantCard resData={restaurant} /></Link>)

//                        //return <RestaurantCardPromoted resData={restaurant} key={index} />;
//                     })
//                 }