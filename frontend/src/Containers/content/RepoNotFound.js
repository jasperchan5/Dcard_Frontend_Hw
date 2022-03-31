import '../css/Content.css';
const RepoNotFound = () => {
    return(
        <>
            <div style={{display: "inline", verticalAlign: "middle"}}>
                <div className="content_noData">
                    Repositories not found. Please enter a valid username.
                </div>
                <div className="content_noData_image">
                    <img alt='not found' src="https://img.icons8.com/windows/96/000000/no-data-availible.png"/>
                </div>
            </div>
        </>
    )
}

export default RepoNotFound;