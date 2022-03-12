import React, { useContext, useState } from "react"
const StatusContext = React.createContext({
    showList: true,
    validUserName: false,
    repoCnt: 0,
    EnableShowList: () => {},
    DisableShowList: () => {},
    EnableUserName: () => {},
    DisableUserName: () => {},
    UpdateRepoCnt: () => {}
});

const StatusProvider = (props) => {
    const [showList,setShowList] = useState(true);
    const [validUserName,setValidUserName] = useState(false);
    const [repoCnt,setRepoCnt] = useState(0);

    const EnableShowList = () => {
        setShowList(true);
    }

    const DisableShowList = () => {
        setShowList(false);
    }

    const EnableUserName = () => {
        setValidUserName(true);
    }

    const DisableUserName = () => {
        setValidUserName(false);
    }
    
    const UpdateRepoCnt = (input) => {
        setRepoCnt(input);
    }

    return(
        <StatusContext.Provider value={{
            showList,
            validUserName,
            repoCnt,
            EnableShowList,
            DisableShowList,
            EnableUserName,
            DisableUserName,
            UpdateRepoCnt
        }} {...props}></StatusContext.Provider>
    )
}

const UseStatus = () => {
    return useContext(StatusContext);
}

export { StatusProvider, UseStatus };
