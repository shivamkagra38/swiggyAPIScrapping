import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import UserContext from "../UserContext";

export const isPromoted = (ResCard) => {

    return (props) => {

        //console.log(props);
        return (

            <div>

                <label className="promoted-label absolute bg-black text-white z-50 p-1 rounded-lg">Promoted</label>
                <ResCard resData={props.resData}/>

            </div>

        );
    }

}

const RestaurantCard = (props) => {

    const data = useContext(UserContext);

    const {resName, cusine, img,star} = props.resData;

    return (
        <div data-testid="resCards" className="res-card m-4 p-4 w-[250px] h-[420px] rounded-lg hover:scale-105 hover:shadow-xl transition-transform bg-[#f0f0f0]">
           
            <div className="res-img">
                <img src={img} className="rounded-lg"></img>
            </div>

            <h3 className="font-semibold py-2.5">{resName}</h3>
            <h5>{cusine}</h5>
            <h5>{star} stars</h5>
            <h5>20 minutes</h5>
            <span>{data.loggedIn}</span>

        </div>
    );
}

export default RestaurantCard;