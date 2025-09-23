import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../src/Component/Header.js";
import "@testing-library/jest-dom"
import { Provider } from "react-redux";
import appStore from "../src/utils/appStore.js";
import { BrowserRouter } from "react-router-dom";

describe("Header Component Test Cases.", () => {

    test("Should Render Login Button In Header Component", () => {

        render(
        <BrowserRouter>
        <Provider store={appStore}><Header /></Provider>
        </BrowserRouter>
    );

        //Query
        const logInButton = screen.getByRole("button", {name: "Log In !"});

        //Assertion
        expect(logInButton).toBeInTheDocument();

    });

    test("Cart items 0 in header component", () => {

        render(
        <BrowserRouter>
        <Provider store={appStore}><Header /></Provider>
        </BrowserRouter>
    );

        //Query
        const cart = screen.getByText("Cart(0)");

        //Assertion
        expect(cart).toBeInTheDocument();

    });

    test("Log In -> Log out button test", () => {

        render(
            <BrowserRouter>
            <Provider store={appStore}>
            <Header />
            </Provider>
            </BrowserRouter>
        );

        const logInButton = screen.getByRole("button",{name:"Log In !"});

        fireEvent.click(logInButton);

        const logOutButton = screen.getByRole("button",{name:"Log Out !"});

        expect(logOutButton).toBeInTheDocument();

    });


});