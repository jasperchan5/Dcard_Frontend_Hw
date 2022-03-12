import InputPage from './InputPage.js';
import RepoPage from './RepoPage.js';
import RepoList from './RepoList.js';
import { UseStatus } from '../../Hooks';
import RepoNotFound from './RepoNotFound.js';
import '../css/Content.css'

export default () => {
    const { showList, validUserName } = UseStatus();
    return(
        <div>
            <div style={{display: validUserName ? "block" : "none"}}>
            {
                showList ? 
                <div className='content_fade_in'>
                    <RepoList></RepoList>
                </div> :
                <div className='content_fade_in'>
                    <RepoPage></RepoPage> 
                </div>
            }
            </div>
            <div style={{display: validUserName ? "none" : "block"}} className='content_fade_in'>
                <RepoNotFound></RepoNotFound>
                <InputPage></InputPage>
            </div>
        </div>
    )
}