import { render, screen } from "@testing-library/react";
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
        const logInButton = screen.getByRole("button");

        //Assertion
        expect(logInButton).toBeInTheDocument();

    });

});