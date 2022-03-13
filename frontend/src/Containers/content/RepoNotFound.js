import '../css/Content.css';
export default () => {
    return(
        <>
            <div style={{display: "inline", verticalAlign: "middle"}}>
                <div className="content_noData">
                    Repositories not found. Please enter a valid username.
                </div>
                <div className="content_noData_image">
                    <img src="https://img.icons8.com/windows/96/000000/no-data-availible.png"/>
                </div>
            </div>
        </>
    )
}