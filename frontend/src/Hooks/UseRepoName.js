import React, { useContext, useState, useEffect } from "react"
const RepoNameContext = React.createContext({
    repoName: "",
    AddRepoName: () => {},
    ClearRepoName: () => {}
});

const RepoNameProvider = (props) => {
    const [repoName,setRepoName] = useState("");

    useEffect(() => {
        setRepoName(localStorage.getItem("repoName"));
    }, []);

    const AddRepoName = (input) => {
        setRepoName(input);
        localStorage.setItem("repoName", input);
    }
    const ClearRepoName = () => {
        setRepoName("");
        localStorage.removeItem("repoName");
    }
    return(
        <RepoNameContext.Provider value={{
            repoName,
            AddRepoName,
            ClearRepoName
        }} {...props}></RepoNameContext.Provider>
    )
}

const UseRepoName = () => {
    return useContext(RepoNameContext);
}

export { RepoNameProvider, UseRepoName };
