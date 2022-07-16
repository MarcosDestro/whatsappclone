import { AttachFile, MoreVert, Search } from '@mui/icons-material';
import avatar from '../../assets/avatar.png'



import './style.scss';

export function ChatWindow() {
    return (
        <div className='chatWindow'>
            <div className="header">
                <div className="headerInfo">
                    <img src={ avatar } className="avatar" />
                    <div className="name">
                        Bonieky Lacerda
                    </div>                    
                </div>

                <div className="headerButtons">
                        <div className="btn">
                            <Search />
                        </div>

                        <div className="btn">
                            <AttachFile />
                        </div>

                        <div className="btn">
                            <MoreVert />
                        </div>
                    </div>
            </div>

            <div className="body">

            </div>

            <div className="footer">

            </div>
        </div>
    )
}