import { act, fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../src/Component/RestaurantMenu.js";
import rData from "./ResMockData.json"
import "@testing-library/jest-dom"
import appStore from "../src/utils/appStore.js";
import { Provider } from "react-redux";
import Header from "../src/Component/Header.js";
import { BrowserRouter } from "react-router-dom";
import CartPage from "../src/Component/CartPage.js";

global.fetch = jest.fn(() => {

    return new Promise((resolve, reject) => {

        resolve({

            json: () => {

                return Promise.resolve(rData);

            }

        });

    });

});

test("Cart flow testing...", async () => {

    await act(async () => {
        render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
            <RestaurantMenu />
            <CartPage />
        </Provider>
        </BrowserRouter>
        );
    });

    const recommendedSection = screen.getByText("Recommended (5)");

    fireEvent.click(recommendedSection);

    const accordianItems = screen.getAllByTestId("accordian-items");

    expect(accordianItems.length).toBe(5);


    const addButtons = screen.getAllByRole("button",{name : "Add +"});
    fireEvent.click(addButtons[0]);
    fireEvent.click(addButtons[0]);

    const cartCheck = screen.getByText("Cart(2)");

    expect(cartCheck).toBeInTheDocument();

    const cartItems = screen.getAllByTestId("cart-items");

    expect(cartItems.length).toBe(2);

});