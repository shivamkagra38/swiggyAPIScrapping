import React, { useEffect } from 'react';
import {useeffect, useState} from "react";
import ShimmerUI from './ShimmerUI';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../customHooks/useRestaurantMenu';
import useOnline from "../customHooks/useOnline";
import Accordian from './Accordian';

const RestaurantMenu = () => {

  console.log("RestaurantMenu Rendered");
  const resId = useParams().resId;

  const onlineStatus = useOnline();
  
  const resInfo = useRestaurantMenu(resId);

  const[idx, setIdx] = useState(1);

  if(onlineStatus === false)
  {
    return <h1>🔴 Offline, Please check your internet connection!!</h1>;
  }

  if(resInfo === null)
  {
    return <ShimmerUI/>
  }
  
  const{name,cuisines} = resInfo.data.cards[2].card.card.info;

  //console.log(resInfo.data.cards[2].card.card.info);


  //const {card} = resInfo?.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card;
  const card = resInfo?.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;

  const filterArray = resInfo?.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((i)=>{

    //console.log(i.card.card?.["@type"]);

    if(i.card.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    {
      return true;
    }

    return false;
  });


  //console.log(filterArray);

  return (

    <div className="menu text-center">
      <div className="font-medium my-6 text-2xl">{name}</div>
      <p className="font-medium text-gray-800 text-lg mb-6">{cuisines.join(", ")}</p>

      {
        filterArray.map((category,key)=>{

          //console.log(category.card.card.title);

          return (
            <Accordian key={key} i={key} info={category} showItems={key === idx ? true : false} setIdx={setIdx}/>
          );

        })
      }

    </div>

  );

}

export default RestaurantMenu;
