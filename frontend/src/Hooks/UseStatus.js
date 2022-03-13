import React, { useContext, useState, useEffect } from "react"
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

    useEffect(() => {
        setShowList(localStorage.getItem("showList") === 'true' ? true : false);
        setValidUserName(localStorage.getItem("validUserName") === 'true' ? true : false);
        setRepoCnt(localStorage.getItem("repoCnt"));
    }, []);

    const EnableShowList = () => {
        setShowList(true);
        localStorage.setItem("showList", "true");
    }

    const DisableShowList = () => {
        setShowList(false);
        localStorage.removeItem("showList");
    }

    const EnableUserName = () => {
        setValidUserName(true);
        localStorage.setItem("validUserName", "true");
    }

    const DisableUserName = () => {
        setValidUserName(false);
        localStorage.removeItem("validUserName");
    }
    
    const UpdateRepoCnt = (input) => {
        setRepoCnt(input);
        localStorage.setItem("repoCnt",input);
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
