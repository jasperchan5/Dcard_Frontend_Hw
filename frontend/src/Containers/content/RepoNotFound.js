import '../css/Content.css';
const RepoNotFound = () => {
    return(
        <>
            <div style={{display: "inline", verticalAlign: "middle"}}>
                <div className="content_noData">
                    Searching for repos...<br></br>
                    If you don't see any repo, please try another username.
                </div>
            </div>
        </>
    )
}

export default RepoNotFound;