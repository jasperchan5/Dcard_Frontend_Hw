import '../css/RepoList.css';
export default () => {
    return(
        <>
            <div className="repo_noData">
                Repositories not found. Please enter a valid username.
            </div>
            <div className="repo_noData_image">
                <img src="https://img.icons8.com/windows/96/000000/no-data-availible.png"/>
            </div>
        </>
    )
}