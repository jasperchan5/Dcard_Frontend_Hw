import React, { useContext, useState } from "react"
const RepoNameContext = React.createContext({repoName: ""});

const RepoUtils = () => {
    const [repoName,setRepoName] = useState("");
    const RepoNameProvider = (props) => {
        return(
            <RepoNameContext.Provider value={repoName} {...props}></RepoNameContext.Provider>
        )
    }
    const UseRepoName = () => {
        return useContext(RepoNameContext);
    }

    const ClearRepoName = () => {
        setRepoName("");
    }

    return { RepoNameProvider, UseRepoName, ClearRepoName, repoName, setRepoName };
}

export default RepoUtils;
