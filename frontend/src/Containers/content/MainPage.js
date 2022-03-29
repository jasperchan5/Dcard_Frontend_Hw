import UserNameInput from './UserNameInput';
import RepoNotFound from './RepoNotFound';
import Notification from '../Notification.js';
import '../css/Content.css';

export default () => {
    const { warning } = Notification();
    return(
        <>
            <div className='content_noRepo'>
                <RepoNotFound/>
            </div>
            <div className='content_warning'>
                {warning}
            </div>
            <div className='content_input'>
                <UserNameInput/>
            </div>
        </>
    )
}