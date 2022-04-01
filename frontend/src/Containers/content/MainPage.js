import UserNameInput from './UserNameInput';
import RepoNotFound from './RepoNotFound';
import Notification from '../Notification.js';
import { UseErrorMessage } from '../../Hooks';
import { useEffect } from 'react';
import instance from '../../axios';
import '../css/Content.css';

const MainPage = () => {
    const { warning } = Notification();
    const { messages } = UseErrorMessage();
    useEffect(() => {
        const runApi = async() => {
            await instance.get('/');
        }
        runApi();
    }, []);
    return(
        <>
            <div style={{position: "absolute", width: "100%"}}>
            {
                messages !== null ?
                    messages.length !== 0 ? messages.map((msg,i) => {
                        return(
                            <div key={`msg_${i}`} className='content_warning'>
                                {warning(msg)}
                            </div>
                        )
                    }) : <></> 
                : <></>
            }
            </div>
            <div className='content_noRepo'>
                <RepoNotFound/>
            </div>
            <div style={{width: "100%", height: "12vh"}}></div>
            <div className='content_input'>
                <UserNameInput/>
            </div>
        </>
    )
}

export default MainPage;