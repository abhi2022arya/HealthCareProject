import React,{createContext, useState} from "react";

const userInfoContext = createContext();

function GlobalState({children})
{
    const[globalFirstName,setGlobalFirstName]  = useState("");
    const[globalLastName, setGlobalLastName] = useState("");
    const[globalEmail,setGlobalEmail] = useState("");

    const values = {
        globalFirstName,
        setGlobalFirstName,
        globalLastName,
        setGlobalLastName,
        globalEmail,
        setGlobalEmail
    };

    return(
        <userInfoContext.Provider value={values}>
            {children}
        </userInfoContext.Provider>
    );
}

export {userInfoContext,GlobalState};