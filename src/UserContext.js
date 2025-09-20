import { createContext } from "react";

const UserContext = createContext({

    loggedIn : "Default User",


});

console.log("context: ");
console.log(UserContext);

export default UserContext;