import './css/Notification.css';

const Notification = () => {

    const showWarning = () => {
        let warning = document.getElementsByClassName("notification")[0];
        warning.className = "notification visible";
        setTimeout(() => warning.className = "notification invisible", 1500);
    }

    const warning = <>
        <div className='notification invisible'>
            <div className='notification_text'>
                No username!
            </div>
        </div>
    </>
        

    return { showWarning, warning };
}

export default Notification;