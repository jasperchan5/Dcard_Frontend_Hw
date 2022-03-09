import React, { useContext, useState } from "react"
const UserNameContext = React.createContext({userName: ""});

const UserUtils = () => {
    const [userName,setUserName] = useState("");
    const UserNameProvider = (props) => {
        return(
            <UserNameContext.Provider value={userName} {...props}></UserNameContext.Provider>
        )
    }
    const UseUserName = () => {
        return useContext(UserNameContext);
    }

    const ClearUserName = () => {
        setUserName("");
    }

    return { UserNameProvider, UseUserName, ClearUserName, userName, setUserName };
}

export default UserUtils;
