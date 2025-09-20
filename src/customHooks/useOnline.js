import { useEffect, useState } from "react";

const useOnline = () => {
    //console.log("useOnline Hook Rendered");

    const[status, setStatus] = useState(true);

    useEffect(()=>{

        addEventListener("online",()=>{

            setStatus(true);

        });

        addEventListener("offline",()=>{

            setStatus(false);

        });

    },[]);

    return status;

}

export default useOnline;