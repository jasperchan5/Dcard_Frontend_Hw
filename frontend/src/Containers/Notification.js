import './css/Notification.css';
import warnIcon from './elements/warning.png';

const Notification = () => {

    const warning = (text) => <>
        <div className='notification visible'>
            <div style={{width: "15%"}}>
                <div className="notification_icon">
                    <img alt='warning' src={warnIcon}></img>
                </div>
            </div>
            <div style={{width: "85%"}}>
                <div className='notification_text'>
                    {text}
                </div>
            </div>
        </div>
    </>

    return { warning };
}

export default Notification;