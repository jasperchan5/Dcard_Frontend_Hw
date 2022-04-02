import React, { useContext, useState, useEffect } from "react"
const RepoCntContext = React.createContext({
    repoCnt: 0,
    UpdateRepoCnt: () => {},
    ClearRepoCnt: () => {}
});

const RepoCntProvider = (props) => {
    const [repoCnt,setRepoCnt] = useState(0);

    useEffect(() => {
        setRepoCnt(localStorage.getItem("repoCnt"));
    }, []);

    const UpdateRepoCnt = (input) => {
        setRepoCnt(input);
        localStorage.setItem("repoCnt",input);
    }

    const ClearRepoCnt = () => {
        setRepoCnt(0);
        localStorage.removeItem("repoCnt");
    }

    return(
        <RepoCntContext.Provider value={{
            repoCnt,
            UpdateRepoCnt,
            ClearRepoCnt
        }} {...props}></RepoCntContext.Provider>
    )
}

const UseRepoCnt = () => {
    return useContext(RepoCntContext);
}

export { RepoCntProvider, UseRepoCnt };
