import React, { useContext, useState } from "react"
const RepoNameContext = React.createContext({
    repoName: "",
    AddRepoName: () => {},
    ClearRepoName: () => {}
});

const RepoNameProvider = (props) => {
    const [repoName,setRepoName] = useState("");
    const AddRepoName = (input) => {
        setRepoName(input);
    }
    const ClearRepoName = () => {
        setRepoName("");
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
