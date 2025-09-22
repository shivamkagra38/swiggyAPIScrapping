import {render, screen} from "@testing-library/react";
import RestaurantCard from "../src/Component/RestaurantCard";
import "@testing-library/jest-dom";

test("Restaurant card rendered.", () => {

    render(<RestaurantCard resData={
        {
            resName: "The Good Bowl",
            cusine: "Food",
            img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/15/7d71a041-e867-4f13-9ead-e96ebfc3ef97_221311.jpg",
            star: 4.5,
            id: "221311",
            promoted: true
        }
    }/>);

    const resName = screen.getByRole("img");

    expect(resName).toBeInTheDocument();

});