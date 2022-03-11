import React, { useContext, useState } from "react"
const UserNameContext = React.createContext({
    userName: "", 
    AddUserName: () => {},
    ClearUserName: () => {},
    PrintUserName: () => {}
});

const UserNameProvider = (props) => {
    const [userName,setUserName] = useState("");
    const AddUserName = (input) => {
        setUserName(input);
    }
    const ClearUserName = () => {
        setUserName("");
    }
    const PrintUserName = () => {
        console.log(userName);
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
