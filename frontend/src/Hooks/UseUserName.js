import React, { useContext, useState, useEffect } from "react"
const UserNameContext = React.createContext({
    userName: "", 
    AddUserName: () => {},
    ClearUserName: () => {},
    PrintUserName: () => {}
});

const UserNameProvider = (props) => {
    const [userName,setUserName] = useState("");
    useEffect(() => {
        setUserName(localStorage.getItem("userName"));
    }, []);
    const AddUserName = (input) => {
        setUserName(input);
        localStorage.setItem("userName",input);
    }
    const ClearUserName = () => {
        setUserName("");
        localStorage.removeItem("userName");
    }
    const PrintUserName = () => {
        // console.log(userName);
    }
    return(
        <UserNameContext.Provider value={{
            userName,
            AddUserName,
            ClearUserName,
            PrintUserName
        }} {...props}></UserNameContext.Provider>
    )
}

const UseUserName = () => {
    return useContext(UserNameContext);
}

export { UserNameProvider, UseUserName};
