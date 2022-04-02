import UserNameInput from './UserNameInput.js';
import Notification from '../Notification.js';
import { UseErrorMessage } from '../../Hooks/index.js';
import { useEffect } from 'react';
import instance from '../../axios';
import '../css/Content.css';
import Intro from './Intro.js';

const MainPage = () => {
    const { warning } = Notification();
    const { messages } = UseErrorMessage();
    useEffect(() => {
        localStorage.clear();
        const runApi = async() => {
            await instance.get('/backend');
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
                            <div key={`msg_${i}`} className='content_notification'>
                                {warning(msg)}
                            </div>
                        )
                    }) : <></> 
                : <></>
            }
            </div>
            <div className='content_noRepo'>
                <Intro></Intro>
            </div>            
            <div style={{width: "100%", height: "12vh"}}></div>
            <div className='content_input'>
                <UserNameInput/>
            </div>
        </>
    )
}

export default MainPage;