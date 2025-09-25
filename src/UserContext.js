import { createContext } from "react";

const UserContext = createContext({

    loggedIn : "Default User",
    setFn : () => {console.log("Not Set!");}
});

export default UserContext;